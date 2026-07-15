import React, { useState, useEffect, useRef } from 'react';
import Navbar from "./components/navbar";
import Cart from "./components/cartSystem";
import Footer from "./components/footer";
import ContactForm from "./components/contactForm";
const Home = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(null); // null, 'checkout', 'success'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (isCartOpen || checkoutStep) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isCartOpen, checkoutStep]);

  const categories = ['All', 'Bread', 'Pastries', 'Cakes', 'Cookies'];

  const products = [
    {
      id: 1,
      name: 'Sourdough Boule',
      price: 8.50,
      category: 'Bread',
      image: 'https://images.unsplash.com/photo-1585476263060-b7a6b9f3a46e?w=500&auto=format&fit=crop&q=60',
      description: 'Rustic crust with tangy flavor and soft, airy crumb.'
    },
    {
      id: 2,
      name: 'Croissant',
      price: 4.25,
      category: 'Pastries',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60',
      description: 'Buttery, flaky layers with a golden crisp exterior.'
    },
    {
      id: 3,
      name: 'Chocolate Fudge Cake',
      price: 32.00,
      category: 'Cakes',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60',
      description: 'Rich dark chocolate layers with velvety ganache.'
    },
    {
      id: 4,
      name: 'Almond Biscotti',
      price: 3.75,
      category: 'Cookies',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60',
      description: 'Twice-baked Italian cookies with roasted almonds.'
    },
    {
      id: 5,
      name: 'Brioche Loaf',
      price: 9.00,
      category: 'Bread',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60',
      description: 'Enriched butter bread with a tender golden crust.'
    },
    {
      id: 6,
      name: 'Fruit Tart',
      price: 6.50,
      category: 'Pastries',
      image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&auto=format&fit=crop&q=60',
      description: 'Vanilla custard with fresh seasonal berries on crisp pastry.'
    },
    {
      id: 7,
      name: 'Red Velvet Cake',
      price: 28.00,
      category: 'Cakes',
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c31b?w=500&auto=format&fit=crop&q=60',
      description: 'Classic red velvet with cream cheese frosting.'
    },
    {
      id: 8,
      name: 'Macarons Box',
      price: 18.00,
      category: 'Cookies',
      image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&auto=format&fit=crop&q=60',
      description: 'Assorted French macarons in six delicate flavors.'
    },
    {
      id: 9,
      name: 'Cinnamon Rolls',
      price: 5.50,
      category: 'Pastries',
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e8b2?w=500&auto=format&fit=crop&q=60',
      description: 'Warm swirls of cinnamon sugar and cream cheese glaze.'
    },
    {
      id: 10,
      name: 'Baguette',
      price: 4.00,
      category: 'Bread',
      image: 'https://images.unsplash.com/photo-1597079910443-60c43fc4f729?w=500&auto=format&fit=crop&q=60',
      description: 'Traditional French baguette with a shatteringly crisp crust.'
    },
    {
      id: 11,
      name: 'Lemon Drizzle Cake',
      price: 24.00,
      category: 'Cakes',
      image: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=500&auto=format&fit=crop&q=60',
      description: 'Zesty lemon sponge with a tangy sweet glaze.'
    },
    {
      id: 12,
      name: 'Oatmeal Raisin Cookies',
      price: 2.50,
      category: 'Cookies',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop&q=60',
      description: 'Chewy oatmeal cookies with plump raisins and warm spices.'
    }
  ];

  const featured = products.slice(0, 4);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      text: 'The sourdough here is absolutely divine. Best bakery in town by far!',
      role: 'Local Customer'
    },
    {
      name: 'James Rodriguez',
      text: 'Their croissants transport me straight to Paris. Flaky perfection every time.',
      role: 'Food Blogger'
    },
    {
      name: 'Emily Chen',
      text: 'Ordered a custom birthday cake and it exceeded all expectations. Beautiful and delicious!',
      role: 'Regular Customer'
    }
  ];

  const faqs = [
    {
      q: 'What are your opening hours?',
      a: 'We are open Tuesday through Sunday, 7:00 AM to 7:00 PM. We are closed on Mondays for our baking team to rest and prepare fresh ingredients.'
    },
    {
      q: 'Do you offer custom cake orders?',
      a: 'Yes! We specialize in custom cakes for birthdays, weddings, and celebrations. Please place custom orders at least 48 hours in advance.'
    },
    {
      q: 'Are your products made fresh daily?',
      a: 'Absolutely. Every item is baked fresh each morning using locally sourced ingredients. We never sell day-old bread or pastries.'
    },
    {
      q: 'Do you accommodate dietary restrictions?',
      a: 'We offer a selection of gluten-free and vegan options. Please contact us or check product labels for specific dietary information.'
    }
  ];

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart(prev => prev.map(item => item.id === id ? { ...item, qty } : item));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleCheckout = (e) => {
    e.preventDefault();
    setCheckoutStep('success');
    setCart([]);
  };


  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#4A3728] font-sans">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.3s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

<Navbar
cartCount={cartCount}
setIsCartOpen={setIsCartOpen}
/>

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="./src/assets/hero1.jpg" 
            alt="Bakery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#4A3728]/20"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">Every Bite, Filed with Love</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fadeInUp delay-100">Fresh breads, decadent pastries, and custom cakes crafted daily in the heart of the city.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-200">
<button
onClick={() =>
  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
}
className="bg-[#C8A87C] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B8986C] transition-all hover:scale-105 shadow-lg cursor-pointer"
>
Explore Our Menu
</button>

<button
onClick={() =>
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
}
className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all cursor-pointer"
>
Our Story
</button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {/* <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C8A87C] font-semibold tracking-wider uppercase text-sm">Customer Favorites</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Featured Creations</h2>
          <div className="w-24 h-1 bg-[#C8A87C] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product, idx) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 right-4 bg-[#C8A87C] text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#B8986C]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </button>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[#C8A87C] uppercase tracking-wider">{product.category}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{product.name}</h3>
                <p className="text-[#4A3728]/70 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#4A3728]">${product.price.toFixed(2)}</span>
                  <button onClick={() => addToCart(product)} className="text-sm font-semibold text-[#C8A87C] hover:text-[#4A3728] transition-colors underline decoration-2 underline-offset-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Product Catalog */}
      <section id="products" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#C8A87C] font-semibold tracking-wider uppercase text-sm">Full Menu</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Our Catalog</h2>
          <div className="w-24 h-1 bg-[#C8A87C] mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-[#4A3728] text-white shadow-lg' : 'bg-white text-[#4A3728] hover:bg-[#C8A87C]/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-72 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#4A3728]">
                  {product.category}
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 right-4 bg-[#C8A87C] text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#B8986C]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-[#4A3728]/70 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#4A3728]">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-[#4A3728] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#5D4037] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C8A87C]/20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#C8A87C]/20 rounded-full"></div>
              <img 
                src="src/assets/about.jpg" 
                alt="Front-view of Shop" 
                className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <span className="text-[#C8A87C] font-semibold tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Baking Tradition Since 1985</h2>
              <p className="text-lg text-[#4A3728]/80 mb-6 leading-relaxed">
                What started as a small family kitchen has grown into a beloved neighborhood bakery. We believe in the magic of slow fermentation, quality ingredients, and time-honored techniques passed down through generations.
              </p>
              <p className="text-lg text-[#4A3728]/80 mb-8 leading-relaxed">
                Every morning at 3 AM, our bakers begin their craft. By sunrise, the aroma of fresh croissants, sourdough, and cinnamon rolls fills the streets. We source our flour from local mills and our eggs from nearby farms.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C8A87C]">38+</div>
                  <div className="text-sm text-[#4A3728]/70 mt-1">Years of Craft</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C8A87C]">12k</div>
                  <div className="text-sm text-[#4A3728]/70 mt-1">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C8A87C]">100%</div>
                  <div className="text-sm text-[#4A3728]/70 mt-1">Fresh Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C8A87C] font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-[#C8A87C] mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-5 h-5 text-[#C8A87C]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-[#4A3728]/80 text-lg mb-6 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C8A87C]/20 rounded-full flex items-center justify-center text-[#C8A87C] font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-[#4A3728]">{t.name}</div>
                  <div className="text-sm text-[#4A3728]/60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-[#C8A87C] font-semibold tracking-wider uppercase text-sm">Questions</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Frequently Asked</h2>
            <div className="w-24 h-1 bg-[#C8A87C] mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#FFF8F0] rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg hover:bg-[#C8A87C]/5 transition-colors"
                >
                  <span>{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#C8A87C] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-[#4A3728]/70 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<ContactForm formData={formData} setFormData={setFormData} />

<Footer />

      <Cart
  cart={cart}
  isCartOpen={isCartOpen}
  setIsCartOpen={setIsCartOpen}
  checkoutStep={checkoutStep}
  setCheckoutStep={setCheckoutStep}
  removeFromCart={removeFromCart}
  updateQuantity={updateQty}
  cartTotal={cartTotal}
  handleCheckout={handleCheckout}
  formData={formData}
  setFormData={setFormData}
/>
</div>
  );
};


export default Home;