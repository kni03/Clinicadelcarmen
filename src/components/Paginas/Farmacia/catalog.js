import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./catalog.css";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <h2>{product.formula}</h2>
    <p>{product.category.join(', ')}</p>
    <p>{product.marca}</p>
    <p><strong>Concentration:</strong> {product.concentration}</p>
  </div>
);

const CategoryFilter = ({ categories, selectedCategories, onSelectCategory }) => (
  <div className="category-filter">
    {categories.map((category, index) => (
      <button
        key={index}
        onClick={() => onSelectCategory(category)}
        className={selectedCategories.includes(category) ? "selected" : ""}
      >
        {category}
      </button>
    ))}
  </div>
);

const MarcaFilter = ({ marcas, selectedMarcas, onSelectMarca }) => (
  <div className="marca-filter">
    {marcas.map((marca, index) => (
      <button
        key={index}
        onClick={() => onSelectMarca(marca)}
        className={selectedMarcas.includes(marca) ? "selected" : ""}
      >
        {marca}
      </button>
    ))}
  </div>
);

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Buscar productos..."
    className="search-bar"
    onChange={(e) => onSearch(e.target.value)}
  />
);

const AlphabetSort = ({ onSortChange, selectedLetter, onReset }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return (
    <div className="alphabet-sort">
      {alphabet.map(letter => (
        <button
          key={letter}
          onClick={() => onSortChange(letter)}
          className={selectedLetter === letter ? "selected" : ""}
        >
          {letter}
        </button>
      ))}
      <button className="reset-button" onClick={onReset}>Reset</button>
    </div>
  );
};

const AdSpace = ({ position }) => (
  <div className={`ad-space ${position}`}>
    <p>Ad Space - Your Ad Here</p>
  </div>
);

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMarcas, setSelectedMarcas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => {
        setProducts(response.data.map(product => ({
          ...product,
          category: Array.isArray(product.category) 
            ? product.category 
            : product.category.split(',').map(c => c.trim())
        })));
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  // Memoizing categories and marcas
  const categories = useMemo(() => ["All", ...new Set(products.flatMap(p => p.category))], [products]);
  const marcas = useMemo(() => ["All", ...new Set(products.map(p => p.marca))], [products]);

  // Memoized callback for category selection
  const handleCategorySelect = useCallback((category) => {
    setSelectedCategories(prev => category === "All" ? [] : 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  }, []);

  // Memoized callback for marca selection
  const handleMarcaSelect = useCallback((marca) => {
    setSelectedMarcas(prev => marca === "All" ? [] : 
      prev.includes(marca) ? prev.filter(m => m !== marca) : [...prev, marca]
    );
  }, []);

  const handleSortChange = useCallback((letter) => {
    setSortOrder(letter);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes("All") || selectedCategories.some(category => product.category.includes(category))) &&
      (selectedMarcas.length === 0 || selectedMarcas.includes("All") || selectedMarcas.includes(product.marca)) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, selectedCategories, selectedMarcas, searchQuery]);

  const sortedProducts = useMemo(() => {
    if (!sortOrder) return filteredProducts;
    return filteredProducts.filter(p => p.name.startsWith(sortOrder));
  }, [filteredProducts, sortOrder]);

  const currentProducts = useMemo(() => {
    return sortedProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  }, [sortedProducts, currentPage, productsPerPage]);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <div
      className="catalog-container"
      style={{
        backgroundImage: "url('/Images/backgroundH.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Pharmacy Product Catalog</h1>
      <SearchBar onSearch={setSearchQuery} />
      <CategoryFilter categories={categories} selectedCategories={selectedCategories} onSelectCategory={handleCategorySelect} />
      <MarcaFilter marcas={marcas} selectedMarcas={selectedMarcas} onSelectMarca={handleMarcaSelect} />
      <AlphabetSort onSortChange={handleSortChange} selectedLetter={sortOrder} onReset={() => setSortOrder(null)} />

      <div className="content-container">
        <AdSpace position="left" />
        <div className="product-grid">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <AdSpace position="right" />
      </div>

      <div className="pagination-controls">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ProductCatalog;
