// ============================================================
// DATA
// ============================================================
const CATEGORIES = [
  {name:'Men Fashion',icon:'👔',count:248},
  {name:'Women Fashion',icon:'👗',count:312},
  {name:'Kids Collection',icon:'🧸',count:156},
  {name:'Luxury Watches',icon:'⌚',count:89},
  {name:'Shoes & Sneakers',icon:'👟',count:204},
  {name:'Electronics',icon:'📱',count:178},
  {name:'Bags & Accessories',icon:'👜',count:267},
  {name:'Perfumes',icon:'🌸',count:134},
  {name:'Hoodies',icon:'🧥',count:92},
  {name:'Streetwear',icon:'🎽',count:145},
  {name:'Jewelry',icon:'💍',count:198},
  {name:'Smart Gadgets',icon:'🎧',count:113}
];

const PRODUCTS = [
  // Men Fashion
  {id:1,name:'Armani Silk Blazer',brand:'Giorgio Armani',category:'Men Fashion',price:1290,oldPrice:1890,rating:4.8,reviews:124,badge:'sale',img:'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80',imgs:['https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80','https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80','https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&q=80','https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=500&q=80'],sizes:['S','M','L','XL','XXL'],colors:['#1a1a2e','#2c3e50','#7f8c8d'],desc:'The pinnacle of Italian craftsmanship. This silk-wool blend blazer features impeccable hand-stitching and a silhouette that commands attention. Perfect for the modern gentleman who demands excellence.',specs:{Material:'Silk & Wool Blend',Origin:'Italy',Fit:'Slim',Care:'Dry Clean Only'}},
  {id:2,name:'Vetements Oversized Tee',brand:'Vetements',category:'Men Fashion',price:285,rating:4.6,reviews:89,badge:'new',img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80',imgs:['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80','https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80'],sizes:['XS','S','M','L','XL'],colors:['#fff','#1a1a1a','#c9a84c'],desc:'Avant-garde streetwear from the cutting edge of Paris fashion.',specs:{Material:'100% Cotton',Origin:'France',Fit:'Oversized',Care:'Machine Wash'}},
  {id:3,name:'Loro Piana Cashmere Sweater',brand:'Loro Piana',category:'Men Fashion',price:1850,rating:4.9,reviews:67,badge:null,img:'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&q=80',imgs:['https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&q=80'],sizes:['S','M','L','XL'],colors:['#8B7355','#2c3e50','#c0392b'],desc:'The finest cashmere in the world, crafted with extraordinary care.',specs:{Material:'Cashmere',Origin:'Italy',Fit:'Regular',Care:'Dry Clean'}},
  // Women Fashion
  {id:4,name:'Valentino Couture Gown',brand:'Valentino',category:'Women Fashion',price:4200,oldPrice:5800,rating:5.0,reviews:31,badge:'sale',img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80',imgs:['https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80','https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80'],sizes:['XS','S','M','L'],colors:['#c0392b','#1a1a1a','#f5e6d3'],desc:'An architectural masterpiece in silk crepe. This couture gown embodies the vision of Valentino Garavani.',specs:{Material:'Silk Crepe',Origin:'Italy',Fit:'Structured',Care:'Dry Clean Only'}},
  {id:5,name:'Chanel Classic Dress',brand:'Chanel',category:'Women Fashion',price:3100,rating:4.9,reviews:87,badge:'new',img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80',imgs:['https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80'],sizes:['XS','S','M','L','XL'],colors:['#1a1a1a','#fff','#c9a84c'],desc:'Timeless elegance from the house of Chanel.',specs:{Material:'Tweed',Origin:'France',Fit:'Classic',Care:'Dry Clean'}},
  {id:6,name:'Prada Silk Blouse',brand:'Prada',category:'Women Fashion',price:780,rating:4.7,reviews:102,badge:null,img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',imgs:['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80'],sizes:['XS','S','M','L'],colors:['#fff','#f5c6cb','#1a1a1a'],desc:'Refined sophistication in Prada\'s signature silk.',specs:{Material:'Pure Silk',Origin:'Italy',Fit:'Relaxed',Care:'Dry Clean'}},
  // Kids Collection
  {id:7,name:'Burberry Kids Coat',brand:'Burberry',category:'Kids Collection',price:650,rating:4.8,reviews:44,badge:'new',img:'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80',imgs:['https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80'],sizes:['3Y','4Y','5Y','6Y','7Y','8Y'],colors:['#c9a84c','#1a1a1a','#8b4513'],desc:'Iconic British heritage for the youngest members of your family.',specs:{Material:'Gabardine',Origin:'UK',Fit:'Regular',Care:'Dry Clean'}},
  {id:8,name:'Gucci Kids Sneakers',brand:'Gucci',category:'Kids Collection',price:380,rating:4.6,reviews:56,badge:null,img:'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=500&q=80',imgs:['https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=500&q=80'],sizes:['EU 25','EU 27','EU 29','EU 31','EU 33'],colors:['#fff','#1a1a1a','#c9a84c'],desc:'Signature Gucci style for the next generation of fashion icons.',specs:{Material:'Leather',Origin:'Italy',Fit:'Regular',Care:'Spot Clean'}},
  // Luxury Watches
  {id:9,name:'Rolex Submariner',brand:'Rolex',category:'Luxury Watches',price:14500,rating:5.0,reviews:203,badge:null,img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&q=80',imgs:['https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&q=80','https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&q=80','https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=500&q=80','https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=500&q=80'],sizes:['One Size'],colors:['#1a1a1a','#c9a84c'],desc:'The Submariner is the definitive divers\' watch, launched in 1953 and now an icon recognized worldwide. Water resistant to 300 meters, featuring a unidirectional rotatable bezel.',specs:{Movement:'Automatic Cal. 3235',Case:'Oystersteel',Water:'300m Resistance',Warranty:'5 Years'}},
  {id:10,name:'Patek Philippe Nautilus',brand:'Patek Philippe',category:'Luxury Watches',price:52000,rating:5.0,reviews:87,badge:null,img:'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&q=80',imgs:['https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&q=80'],sizes:['One Size'],colors:['#c0c0c0','#c9a84c'],desc:'The most sought-after sports watch in the world. An investment that appreciates over time.',specs:{Movement:'Cal. 26-330 S C',Case:'Stainless Steel',Thickness:'8.3mm',Warranty:'2 Years'}},
  {id:11,name:'AP Royal Oak',brand:'Audemars Piguet',category:'Luxury Watches',price:38000,rating:4.9,reviews:65,badge:'new',img:'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=500&q=80',imgs:['https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=500&q=80'],sizes:['One Size'],colors:['#c9a84c','#1a1a1a'],desc:'The watch that changed the industry forever in 1972. The Royal Oak remains the pinnacle of luxury sports watches.',specs:{Movement:'Cal. 4302',Case:'Stainless Steel',Diameter:'41mm',Warranty:'2 Years'}},
  // Shoes & Sneakers
  {id:12,name:'Nike Air Jordan 1 Retro',brand:'Nike',category:'Shoes & Sneakers',price:180,oldPrice:250,rating:4.9,reviews:1240,badge:'sale',img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',imgs:['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80','https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80','https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80'],sizes:['US 7','US 8','US 9','US 10','US 11','US 12'],colors:['#c0392b','#fff','#1a1a1a'],desc:'The shoe that started it all. The Air Jordan 1 is the most iconic sneaker ever created, now available in the coveted retro colorway.',specs:{Upper:'Leather',Sole:'Rubber',Cushioning:'Air Unit',Origin:'USA'}},
  {id:13,name:'Balenciaga Triple S',brand:'Balenciaga',category:'Shoes & Sneakers',price:895,rating:4.5,reviews:234,badge:'new',img:'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80',imgs:['https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80'],sizes:['EU 39','EU 40','EU 41','EU 42','EU 43','EU 44'],colors:['#fff','#1a1a1a','#c9a84c'],desc:'The sneaker that defined a generation of chunky fashion. Pure Balenciaga DNA.',specs:{Upper:'Mesh & Leather',Sole:'Rubber',Weight:'Light',Origin:'Italy'}},
  {id:14,name:'Christian Louboutin Pumps',brand:'Louboutin',category:'Shoes & Sneakers',price:895,rating:4.8,reviews:189,badge:null,img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80',imgs:['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80'],sizes:['EU 35','EU 36','EU 37','EU 38','EU 39','EU 40'],colors:['#000','#c0392b','#f5f5f5'],desc:'The iconic red sole. Louboutin pumps elevate any outfit to extraordinary.',specs:{Upper:'Patent Leather',Heel:'10cm',Origin:'France',Care:'Specialist Clean'}},
  // Electronics
  {id:15,name:'iPhone 16 Pro Max',brand:'Apple',category:'Electronics',price:1299,rating:4.9,reviews:3420,badge:'new',img:'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80',imgs:['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80','https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80'],sizes:['256GB','512GB','1TB'],colors:['#1a1a1a','#c0c0c0','#c9a84c'],desc:'The most powerful iPhone ever made. A18 Pro chip with 6-core GPU, 48MP Fusion Camera system, and titanium design.',specs:{Display:'6.9" Super Retina XDR',Chip:'A18 Pro',Camera:'48MP Triple',Battery:'All-day'}},
  {id:16,name:'Sony WH-1000XM6',brand:'Sony',category:'Electronics',price:449,oldPrice:549,rating:4.8,reviews:892,badge:'sale',img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',imgs:['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'],sizes:['One Size'],colors:['#1a1a1a','#c0c0c0'],desc:'Industry-leading noise cancellation with 40-hour battery life and AI-powered adaptive audio.',specs:{Connectivity:'Bluetooth 5.3',Battery:'40 Hours',ANC:'Industry Leading',Weight:'250g'}},
  {id:17,name:'MacBook Pro 16" M4',brand:'Apple',category:'Electronics',price:3499,rating:4.9,reviews:567,badge:'new',img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',imgs:['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80'],sizes:['512GB','1TB','2TB'],colors:['#c0c0c0','#1a1a2e'],desc:'The most powerful Mac ever. M4 Max chip with up to 128GB unified memory.',specs:{Chip:'Apple M4 Max',Display:'16.2" Liquid Retina XDR',RAM:'Up to 128GB',Battery:'22 Hours'}},
  // Bags & Accessories
  {id:18,name:'Louis Vuitton Neverfull MM',brand:'Louis Vuitton',category:'Bags & Accessories',price:2100,rating:4.9,reviews:445,badge:null,img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80',imgs:['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80'],sizes:['One Size'],colors:['#c9a84c','#8b4513'],desc:'The iconic LV Monogram canvas tote. Effortlessly elegant and functionally perfect.',specs:{Material:'Monogram Canvas',Size:'31 x 28 x 14cm',Closure:'Open Top',Origin:'France'}},
  {id:19,name:'Hermès Birkin 30',brand:'Hermès',category:'Bags & Accessories',price:32000,rating:5.0,reviews:23,badge:null,img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',imgs:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80'],sizes:['30cm'],colors:['#c9a84c','#1a1a1a','#c0392b'],desc:'The most coveted handbag in the world. A Birkin is not just a bag — it is a legacy.',specs:{Material:'Togo Leather',Size:'30cm',Hardware:'Palladium',Origin:'France'}},
  // Perfumes
  {id:20,name:'Chanel No. 5 EDP',brand:'Chanel',category:'Perfumes',price:245,rating:4.9,reviews:2341,badge:null,img:'https://images.unsplash.com/photo-1541643600914-78b084683702?w=500&q=80',imgs:['https://images.unsplash.com/photo-1541643600914-78b084683702?w=500&q=80','https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80'],sizes:['30ml','50ml','100ml'],colors:['#f5e6d3'],desc:'The world\'s most famous fragrance. An abstract floral aldehyde that changed perfumery forever.',specs:{Family:'Floral Aldehyde',Longevity:'8+ Hours',Top:'Aldehyde, Neroli',Base:'Sandalwood, Vetiver'}},
  {id:21,name:'Tom Ford Oud Wood',brand:'Tom Ford',category:'Perfumes',price:385,rating:4.8,reviews:876,badge:'new',img:'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80',imgs:['https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80'],sizes:['50ml','100ml','250ml'],colors:['#2c1810'],desc:'Warm, woody, seductive. Oud Wood is the signature of ultimate luxury in fragrance.',specs:{Family:'Woody Oriental',Longevity:'10+ Hours',Top:'Oud, Rosewood',Base:'Tonka Bean, Amber'}},
  // Hoodies
  {id:22,name:'Fear of God Essentials Hoodie',brand:'Fear of God',category:'Hoodies',price:165,oldPrice:200,rating:4.7,reviews:567,badge:'sale',img:'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80',imgs:['https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80'],sizes:['XS','S','M','L','XL','XXL'],colors:['#1a1a1a','#808080','#c9a84c','#fff'],desc:'The essential hoodie from Jerry Lorenzo\'s Essentials line. Perfect weight, perfect silhouette.',specs:{Material:'Cotton Fleece',Fit:'Oversized',Print:'Reflective',Care:'Machine Wash'}},
  {id:23,name:'Stüssy Logo Hoodie',brand:'Stüssy',category:'Hoodies',price:125,rating:4.5,reviews:345,badge:'new',img:'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80',imgs:['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80'],sizes:['S','M','L','XL','XXL'],colors:['#1a1a1a','#fff','#c0392b'],desc:'The California streetwear legend. Worn by icons, coveted by all.',specs:{Material:'80% Cotton 20% Poly',Fit:'Regular',Logo:'Embroidered',Care:'Machine Wash'}},
  // Streetwear
  {id:24,name:'Supreme Box Logo Tee',brand:'Supreme',category:'Streetwear',price:168,rating:4.8,reviews:892,badge:null,img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80',imgs:['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80'],sizes:['S','M','L','XL','XXL'],colors:['#c0392b','#1a1a1a','#fff'],desc:'The most recognized logo in streetwear. An instant collector\'s item every season.',specs:{Material:'100% Cotton',Fit:'Boxy',Print:'Screen Print',Care:'Machine Wash Cold'}},
  {id:25,name:'Off-White Industrial Belt',brand:'Off-White',category:'Streetwear',price:285,rating:4.6,reviews:234,badge:'new',img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',imgs:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80'],sizes:['OS'],colors:['#f5f500','#1a1a1a'],desc:'Virgil\'s most iconic accessory. The industrial belt that defined the streetwear era.',specs:{Material:'Nylon Webbing',Width:'3.5cm',Buckle:'Metal',Length:'200cm'}},
  // Jewelry
  {id:26,name:'Tiffany & Co. Diamond Ring',brand:'Tiffany & Co.',category:'Jewelry',price:8500,rating:5.0,reviews:89,badge:null,img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',imgs:['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80','https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&q=80'],sizes:['5','5.5','6','6.5','7','7.5','8'],colors:['#c0c0c0','#c9a84c'],desc:'The Tiffany Setting. The most celebrated engagement ring in the world, crafted in platinum.',specs:{Metal:'Platinum',Diamond:'0.5ct F VS1',Cut:'Round Brilliant',Certification:'GIA Certified'}},
  {id:27,name:'Cartier Love Bracelet',brand:'Cartier',category:'Jewelry',price:6700,rating:4.9,reviews:234,badge:null,img:'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&q=80',imgs:['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&q=80'],sizes:['15','16','17','18','19','20','21'],colors:['#c9a84c','#c0c0c0','#e8b4b8'],desc:'The bracelet of love. Screw it onto your wrist and never take it off.',specs:{Metal:'18k Gold',Width:'6.1mm',Closure:'Screwdriver',Origin:'France'}},
  // Smart Gadgets
  {id:28,name:'Apple Vision Pro',brand:'Apple',category:'Smart Gadgets',price:3499,rating:4.7,reviews:1234,badge:'new',img:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&q=80',imgs:['https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&q=80'],sizes:['One Size'],colors:['#c0c0c0'],desc:'Spatial computing is here. Apple Vision Pro seamlessly blends digital content with the physical world.',specs:{Display:'Micro-OLED',Chip:'M2 + R1',Storage:'256GB',Battery:'2 Hours'}},
  {id:29,name:'DJI Mini 4 Pro',brand:'DJI',category:'Smart Gadgets',price:759,oldPrice:899,rating:4.8,reviews:567,badge:'sale',img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',imgs:['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80'],sizes:['Standard','Fly More Combo'],colors:['#1a1a1a','#c0c0c0'],desc:'Professional aerial photography in the palm of your hand. 4K/60fps HDR, obstacle avoidance.',specs:{Camera:'4K/60fps HDR',Weight:'249g',Range:'20km',Battery:'34 Minutes'}},
];

// ============================================================
// STATE
// ============================================================
let cart = [];
let wishlist = [];
let currentPage = 'home';
let bannerIndex = 0;
let viewingProduct = null;
let shopFilterCat = null;

// ============================================================
// NAVIGATION
// ============================================================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if(el) {
    el.classList.add('active');
    currentPage = page;
    window.scrollTo({top:0,behavior:'smooth'});
    if(page==='shop') renderShopPage();
    if(page==='cart') renderCart();
    if(page==='wishlist') renderWishlist();
    if(page==='checkout') renderCheckout();
    if(page==='categories') renderAllCategories();
    initScrollReveal();
  }
}

function filterAndShow(cat) {
  shopFilterCat = cat;
  showPage('shop');
  // Check the right category checkbox
  document.querySelectorAll('.cat-filter').forEach(cb => {
    cb.checked = (cb.value === cat);
  });
  applyFilters();
}

// ============================================================
// RENDER HELPERS
// ============================================================
function starHTML(r) {
  const full = Math.floor(r);
  const half = r % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half?'⯨':'') + '☆'.repeat(empty);
}

function productCardHTML(p, context) {
  const inWish = wishlist.some(w => w.id === p.id);
  return `
    <div class="product-card tilt" onclick="viewProduct(${p.id})">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy">
        ${p.badge ? `<div class="product-badge ${p.badge}">${p.badge==='new'?'New':'Sale'}</div>` : ''}
        <button class="wish-corner ${inWish?'active':''}" onclick="toggleWish(event,${p.id})">${inWish?'♥':'♡'}</button>
        <div class="product-overlay"></div>
        <div class="product-actions">
          <button class="p-btn" onclick="addToCart(event,${p.id})">Add to Cart</button>
          <button class="p-btn wish" onclick="toggleWish(event,${p.id})">${inWish?'♥':'♡'}</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-brand">${p.brand}</div>
        <div class="product-bottom">
          <div class="product-price">
            ${p.oldPrice ? `<span class="old">$${p.oldPrice.toLocaleString()}</span>` : ''}
            $${p.price.toLocaleString()}
          </div>
          <div class="product-rating">
            <span class="stars">${starHTML(p.rating)}</span>
            <span class="rating-count">(${p.reviews})</span>
          </div>
        </div>
      </div>
    </div>`;
}

function catCardHTML(cat) {
  return `<div class="cat-card" onclick="filterAndShow('${cat.name}')">
    <div class="cat-icon">${cat.icon}</div>
    <div class="cat-name">${cat.name}</div>
    <div class="cat-count">${cat.count} products</div>
  </div>`;
}

// ============================================================
// HOME PAGE RENDER
// ============================================================
function renderHomePage() {
  // Categories
  const catGrid = document.getElementById('home-categories-grid');
  if(catGrid) catGrid.innerHTML = CATEGORIES.map(catCardHTML).join('');

  // Trending (random 8)
  const trending = [...PRODUCTS].sort(() => Math.random()-0.5).slice(0,8);
  const tEl = document.getElementById('trending-products');
  if(tEl) tEl.innerHTML = trending.map(p => productCardHTML(p,'home')).join('');

  // Best sellers (top rated)
  const bestsellers = [...PRODUCTS].sort((a,b) => b.rating-a.rating).slice(0,8);
  const bEl = document.getElementById('bestseller-products');
  if(bEl) bEl.innerHTML = bestsellers.map(p => productCardHTML(p,'home')).join('');

  initTilt();
}

// ============================================================
// SHOP PAGE
// ============================================================
function renderShopPage() {
  applyFilters();
}

function applyFilters() {
  let filtered = [...PRODUCTS];

  // Category filters
  const checkedCats = [...document.querySelectorAll('.cat-filter:checked')].map(cb => cb.value);
  if(checkedCats.length > 0) {
    filtered = filtered.filter(p => checkedCats.includes(p.category));
  }

  // Price
  const maxPrice = parseInt(document.getElementById('price-filter')?.value || 5000);
  filtered = filtered.filter(p => p.price <= maxPrice);

  // Rating
  const checkedRatings = [...document.querySelectorAll('.rating-filter:checked')].map(cb => parseFloat(cb.value));
  if(checkedRatings.length > 0) {
    const minRating = Math.max(...checkedRatings);
    filtered = filtered.filter(p => p.rating >= minRating);
  }

  // Availability
  const avail = [...document.querySelectorAll('.avail-filter:checked')].map(cb => cb.value);
  if(avail.includes('new')) filtered = filtered.filter(p => p.badge === 'new');
  if(avail.includes('sale')) filtered = filtered.filter(p => p.badge === 'sale');

  // Sort
  const sort = document.getElementById('sort-select')?.value || 'default';
  if(sort === 'price-asc') filtered.sort((a,b) => a.price-b.price);
  else if(sort === 'price-desc') filtered.sort((a,b) => b.price-a.price);
  else if(sort === 'rating') filtered.sort((a,b) => b.rating-a.rating);
  else if(sort === 'newest') filtered.sort((a,b) => (b.badge==='new'?1:0)-(a.badge==='new'?1:0));

  const grid = document.getElementById('shop-products-grid');
  if(grid) {
    if(filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><h3>No products found</h3><p>Try adjusting your filters</p></div>`;
    } else {
      grid.innerHTML = filtered.map(p => productCardHTML(p,'shop')).join('');
    }
    initTilt();
  }

  const countEl = document.getElementById('shop-count');
  if(countEl) countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;

  // Filter tags
  const tagsEl = document.getElementById('filter-tags');
  if(tagsEl) {
    const tags = [];
    checkedCats.forEach(c => tags.push(`<div class="filter-tag">${c} <span onclick="removeCatFilter('${c}')">×</span></div>`));
    tagsEl.innerHTML = tags.join('');
  }
}

function removeCatFilter(cat) {
  const cb = document.querySelector(`.cat-filter[value="${cat}"]`);
  if(cb) { cb.checked = false; applyFilters(); }
}

// ============================================================
// ALL CATEGORIES
// ============================================================
function renderAllCategories() {
  const el = document.getElementById('all-categories-grid');
  if(el) el.innerHTML = CATEGORIES.map(catCardHTML).join('');
}

// ============================================================
// PRODUCT DETAIL
// ============================================================
function viewProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  viewingProduct = p;
  showPage('product');

  const layout = document.getElementById('detail-layout');
  const inWish = wishlist.some(w => w.id === p.id);

  const thumbsHTML = (p.imgs || [p.img]).map((img,i) =>
    `<div class="thumb ${i===0?'active':''}" onclick="switchImg(this,'${img}')"><img src="${img}" alt="view ${i+1}" loading="lazy"></div>`
  ).join('');

  const sizesHTML = (p.sizes || ['One Size']).map(s =>
    `<button class="size-btn ${s==='M'||s==='One Size'?'active':''}" onclick="this.parentElement.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">${s}</button>`
  ).join('');

  const colorsHTML = (p.colors || ['#1a1a1a']).map((c,i) =>
    `<div class="color-btn ${i===0?'active':''}" style="background:${c}" onclick="this.parentElement.querySelectorAll('.color-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')" title="${c}"></div>`
  ).join('');

  const specsHTML = p.specs ? Object.entries(p.specs).map(([k,v]) =>
    `<div class="spec-item"><div class="spec-label">${k}</div><div class="spec-value">${v}</div></div>`
  ).join('') : '';

  layout.innerHTML = `
    <div class="detail-imgs">
      <div class="main-img-wrap">
        <img src="${p.img}" alt="${p.name}" id="main-detail-img">
      </div>
      <div class="thumb-grid">${thumbsHTML}</div>
    </div>
    <div class="detail-info">
      <div class="detail-breadcrumb">
        <span style="cursor:pointer;color:var(--gold)" onclick="showPage('home')">Home</span> ›
        <span style="cursor:pointer;color:var(--gold)" onclick="filterAndShow('${p.category}')">${p.category}</span> ›
        <span>${p.name}</span>
      </div>
      <div class="detail-brand">${p.brand}</div>
      <h1 class="detail-name">${p.name}</h1>
      <div class="detail-rating">
        <span class="stars" style="font-size:1.1rem">${starHTML(p.rating)}</span>
        <span style="color:var(--gold);font-weight:600">${p.rating}</span>
        <span style="color:var(--text3);font-size:.85rem">(${p.reviews} reviews)</span>
      </div>
      <div class="detail-price">
        ${p.oldPrice ? `<span class="original">$${p.oldPrice.toLocaleString()}</span>` : ''}
        <span class="current">$${p.price.toLocaleString()}</span>
        ${p.oldPrice ? `<span class="discount">-${Math.round((1-p.price/p.oldPrice)*100)}%</span>` : ''}
      </div>
      <p class="detail-desc">${p.desc}</p>
      <div class="detail-label">Select Size</div>
      <div class="size-options">${sizesHTML}</div>
      <div class="detail-label">Color</div>
      <div class="color-options">${colorsHTML}</div>
      <div class="detail-label">Quantity</div>
      <div class="qty-selector">
        <button class="qty-btn" onclick="changeQty(-1)">−</button>
        <span class="qty-num" id="detail-qty">1</span>
        <button class="qty-btn" onclick="changeQty(1)">+</button>
      </div>
      <div class="detail-actions">
        <button class="btn-primary" onclick="addToCartFromDetail(${p.id})">✦ Add to Cart</button>
        <button class="btn-ghost ${inWish?'':''}${inWish?'style="border-color:var(--neon3);color:var(--neon3)"':''}" onclick="toggleWishFromDetail(${p.id},this)">${inWish?'♥ Wishlisted':'♡ Wishlist'}</button>
      </div>
      ${specsHTML ? `<div class="detail-label" style="margin-top:.5rem">Product Details</div><div class="detail-specs">${specsHTML}</div>` : ''}
    </div>`;

  // Related products
  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0,4);
  const relEl = document.getElementById('related-products');
  if(relEl) relEl.innerHTML = related.map(x => productCardHTML(x,'related')).join('');
  initTilt();
}

let detailQty = 1;
function changeQty(d) {
  detailQty = Math.max(1, detailQty + d);
  const el = document.getElementById('detail-qty');
  if(el) el.textContent = detailQty;
}

function switchImg(thumb, src) {
  const main = document.getElementById('main-detail-img');
  if(main) main.src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function addToCartFromDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  for(let i = 0; i < detailQty; i++) addToCartProduct(p);
  showToast('Added to Cart', `${detailQty}x ${p.name} added`);
  detailQty = 1;
  const el = document.getElementById('detail-qty');
  if(el) el.textContent = 1;
}

function toggleWishFromDetail(id, btn) {
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  const idx = wishlist.findIndex(w => w.id === id);
  if(idx >= 0) {
    wishlist.splice(idx, 1);
    btn.textContent = '♡ Wishlist';
    btn.style.borderColor = '';
    btn.style.color = '';
    showToast('Removed', p.name + ' removed from wishlist');
  } else {
    wishlist.push(p);
    btn.textContent = '♥ Wishlisted';
    btn.style.borderColor = 'var(--neon3)';
    btn.style.color = 'var(--neon3)';
    showToast('Wishlisted ♥', p.name + ' saved to wishlist');
  }
  updateNavCounts();
}

// ============================================================
// CART
// ============================================================
function addToCartProduct(p) {
  const ex = cart.find(c => c.id === p.id);
  if(ex) ex.qty++;
  else cart.push({...p, qty:1});
  updateNavCounts();
}

function addToCart(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  addToCartProduct(p);
  showToast('Added to Cart ✦', p.name + ' added to cart');
  refreshProductCards();
}

function renderCart() {
  const itemsEl = document.getElementById('cart-items');
  if(!itemsEl) return;

  if(cart.length === 0) {
    itemsEl.innerHTML = `<div class="empty-state"><div class="empty-icon">🛒</div><h3>Your cart is empty</h3><p>Add some luxury to your life</p><button class="btn-primary" onclick="showPage('shop')">Start Shopping →</button></div>`;
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">${item.brand} · ${item.category}</div>
          <div class="cart-item-price">$${(item.price * item.qty).toLocaleString()}</div>
          <div class="cart-item-actions">
            <div class="qty-selector" style="gap:.5rem">
              <button class="qty-btn" style="width:30px;height:30px" onclick="updateCartQty(${item.id},-1)">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" style="width:30px;height:30px" onclick="updateCartQty(${item.id},1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;color:var(--gold);font-size:.9rem;white-space:nowrap">$${item.price.toLocaleString()} ea</div>
      </div>`).join('');
  }
  updateCartSummary();
}

function updateCartQty(id, d) {
  const item = cart.find(c => c.id === id);
  if(!item) return;
  item.qty = Math.max(1, item.qty + d);
  renderCart();
  updateNavCounts();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  renderCart();
  updateNavCounts();
  showToast('Removed', 'Item removed from cart');
}

function updateCartSummary() {
  const subtotal = cart.reduce((s,c) => s + c.price * c.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  const fmt = n => '$' + n.toLocaleString('en-US', {minimumFractionDigits:2,maximumFractionDigits:2});
  const sub = document.getElementById('cart-subtotal');
  const taxEl = document.getElementById('cart-tax');
  const tot = document.getElementById('cart-total');
  if(sub) sub.textContent = fmt(subtotal);
  if(taxEl) taxEl.textContent = fmt(tax);
  if(tot) tot.textContent = fmt(total);
}

function updateNavCounts() {
  const cartCount = cart.reduce((s,c) => s + c.qty, 0);
  const el = document.getElementById('cart-count');
  if(el) el.textContent = cartCount;
  const wCount = document.getElementById('wishlist-count-nav');
  if(wCount) wCount.textContent = wishlist.length;
}

// ============================================================
// WISHLIST
// ============================================================
function toggleWish(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  const idx = wishlist.findIndex(w => w.id === id);
  if(idx >= 0) {
    wishlist.splice(idx, 1);
    showToast('Removed', p.name + ' removed from wishlist');
  } else {
    wishlist.push(p);
    showToast('Wishlisted ♥', p.name + ' saved to wishlist');
  }
  updateNavCounts();
  refreshProductCards();
  if(currentPage === 'wishlist') renderWishlist();
}

function renderWishlist() {
  const el = document.getElementById('wishlist-products');
  const empty = document.getElementById('wishlist-empty');
  const addAll = document.getElementById('add-all-btn');
  const countText = document.getElementById('wishlist-count-text');

  if(countText) countText.textContent = `${wishlist.length} item${wishlist.length !== 1 ? 's' : ''} saved`;
  if(addAll) addAll.style.display = wishlist.length > 0 ? 'inline-flex' : 'none';

  if(!el) return;
  if(wishlist.length === 0) {
    el.innerHTML = '';
    if(empty) empty.style.display = 'block';
  } else {
    if(empty) empty.style.display = 'none';
    el.innerHTML = wishlist.map(p => productCardHTML(p, 'wishlist')).join('');
    initTilt();
  }
}

function addAllWishlistToCart() {
  wishlist.forEach(p => addToCartProduct(p));
  showToast('All Added!', `${wishlist.length} items added to cart`);
}

function refreshProductCards() {
  // Update wishlist buttons in visible product cards
  document.querySelectorAll('.product-card').forEach(card => {
    const id = parseInt(card.getAttribute('data-id'));
    // Not using data-id here, using onclick pattern — just re-render if needed
  });
}

// ============================================================
// CHECKOUT
// ============================================================
function renderCheckout() {
  const el = document.getElementById('checkout-items');
  const sub = document.getElementById('checkout-subtotal');
  const tot = document.getElementById('checkout-total');
  if(!el) return;

  if(cart.length === 0) {
    el.innerHTML = '<p style="color:var(--text3);font-size:.85rem">Your cart is empty</p>';
  } else {
    el.innerHTML = cart.map(item => `
      <div class="order-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="order-item-info">
          <div class="order-item-name">${item.name}</div>
          <div style="font-size:.75rem;color:var(--text3)">Qty: ${item.qty}</div>
          <div class="order-item-price">$${(item.price*item.qty).toLocaleString()}</div>
        </div>
      </div>`).join('');
  }

  const subtotal = cart.reduce((s,c) => s + c.price*c.qty, 0);
  const total = subtotal * 1.08;
  const fmt = n => '$' + n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  if(sub) sub.textContent = fmt(subtotal);
  if(tot) tot.textContent = fmt(total);
}

function placeOrder() {
  if(cart.length === 0) {
    showToast('Empty Cart', 'Add items to your cart first');
    return;
  }
  showToast('Order Placed! ✦', 'Your luxury order is confirmed');
  cart = [];
  updateNavCounts();
  setTimeout(() => showPage('home'), 1500);
}

function selectPayment(el) {
  document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
  el.classList.add('active');
}

// ============================================================
// BANNER SLIDER
// ============================================================
function slideBanner(dir) {
  const slides = document.getElementById('banner-slides');
  const dots = document.querySelectorAll('.slider-dot');
  const total = 4;
  bannerIndex = (bannerIndex + dir + total) % total;
  if(slides) slides.style.transform = `translateX(-${bannerIndex * 100}%)`;
  dots.forEach((d,i) => d.classList.toggle('active', i === bannerIndex));
}

function goToSlide(i) {
  bannerIndex = i;
  const slides = document.getElementById('banner-slides');
  const dots = document.querySelectorAll('.slider-dot');
  if(slides) slides.style.transform = `translateX(-${bannerIndex * 100}%)`;
  dots.forEach((d,idx) => d.classList.toggle('active', idx === i));
}

// Auto slide
setInterval(() => { if(currentPage === 'home') slideBanner(1); }, 5000);

// ============================================================
// AUTH
// ============================================================
function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((t,i) => t.classList.toggle('active', (i===0&&tab==='login')||(i===1&&tab==='register')));
  document.getElementById('login-form').classList.toggle('active', tab==='login');
  document.getElementById('register-form').classList.toggle('active', tab==='register');
}

// ============================================================
// MOBILE MENU
// ============================================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const ham = document.getElementById('hamburger');
  menu.classList.toggle('open');
  const spans = ham.querySelectorAll('span');
  if(menu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(4px,4px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(4px,-4px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
}

// ============================================================
// TOAST
// ============================================================
function showToast(title, msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
// SCROLL EFFECTS
// ============================================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if(window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
  checkScrollReveal();
});

function checkScrollReveal() {
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.9) el.classList.add('visible');
  });
}

function initScrollReveal() {
  setTimeout(checkScrollReveal, 100);
}

// ============================================================
// 3D TILT
// ============================================================
function initTilt() {
  document.querySelectorAll('.tilt').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const inner = el.querySelector('.tilt-inner') || el;
      inner.style.transform = `rotateY(${x*12}deg) rotateX(${-y*12}deg) translateZ(10px)`;
    });
    el.addEventListener('mouseleave', () => {
      const inner = el.querySelector('.tilt-inner') || el;
      inner.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
    });
  });
}

// ============================================================
// CUSTOM CURSOR
// ============================================================
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let ringX = 0, ringY = 0, curX = 0, curY = 0;

document.addEventListener('mousemove', e => {
  curX = e.clientX; curY = e.clientY;
  cursor.style.left = curX + 'px';
  cursor.style.top = curY + 'px';
});

function animateCursor() {
  ringX += (curX - ringX) * 0.12;
  ringY += (curY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ============================================================
// PARTICLES
// ============================================================
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({length: 80}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.6 + 0.1,
    color: Math.random() > 0.7 ? '#c9a84c' : Math.random() > 0.5 ? '#00e5ff' : '#ffffff'
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if(p.x < 0) p.x = canvas.width;
      if(p.x > canvas.width) p.x = 0;
      if(p.y < 0) p.y = canvas.height;
      if(p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // Draw connections
    for(let i = 0; i < particles.length; i++) {
      for(let j = i+1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#c9a84c';
          ctx.globalAlpha = (1 - dist/100) * 0.08;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ============================================================
// SEARCH
// ============================================================
document.getElementById('nav-search').addEventListener('keydown', e => {
  if(e.key === 'Enter') {
    const q = e.target.value.trim().toLowerCase();
    if(q) {
      showPage('shop');
      setTimeout(() => {
        const grid = document.getElementById('shop-products-grid');
        const results = PRODUCTS.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
        if(grid) grid.innerHTML = results.length ? results.map(p => productCardHTML(p,'search')).join('') : `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><h3>No results for "${q}"</h3><p>Try a different search term</p></div>`;
        initTilt();
        const countEl = document.getElementById('shop-count');
        if(countEl) countEl.textContent = `${results.length} results for "${q}"`;
      }, 100);
    }
  }
});

// ============================================================
// INIT
// ============================================================
window.addEventListener('load', () => {
  // Hide loader
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2200);

  initParticles();
  renderHomePage();
  initScrollReveal();
  initTilt();
});

// Periodic scroll reveal check
setInterval(checkScrollReveal, 500);
