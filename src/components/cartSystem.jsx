import React from "react";
const Cart = ({
    cart,
    isCartOpen,
    setIsCartOpen,
    checkoutStep,
    setCheckoutStep,
    removeFromCart,
    updateQuantity,
    cartTotal,
    handleCheckout,
    formData,
    setFormData,
  }) => {
    return (
      <>
{/* Cart Sidebar */}
{isCartOpen && (
  <div className="fixed inset-0 z-[60] flex justify-end">
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn" onClick={() => setIsCartOpen(false)}></div>
    <div className="relative w-full max-w-md bg-[#FFF8F0] h-full shadow-2xl animate-slideInRight flex flex-col">
      <div className="p-6 border-b border-[#C8A87C]/20 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-[#C8A87C]/10 rounded-full transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-[#C8A87C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-[#C8A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <p className="text-[#4A3728]/60 text-lg">Your cart is empty</p>
            <a onClick={() => setIsCartOpen(false)} className="inline-block mt-4 text-[#C8A87C] font-semibold hover:underline cursor-pointer"><u>Start Shopping</u></a>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <div className="flex-1">
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-sm text-[#4A3728]/60">${item.price.toFixed(2)} each</p>
                <div className="flex items-center gap-3 mt-2">
                  <button onClick={() => updateQuantity(item.id, item.qty - 1)} className="w-7 h-7 rounded-full bg-[#FFF8F0] flex items-center justify-center text-sm hover:bg-[#C8A87C]/20">-</button>
                  <span className="font-semibold w-4 text-center">{item.qty}</span>
                  <button onClick={() => updateQuantity(item.id, item.qty + 1)} className="w-7 h-7 rounded-full bg-[#FFF8F0] flex items-center justify-center text-sm hover:bg-[#C8A87C]/20">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-400 hover:text-red-600 text-sm">Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-6 border-t border-[#C8A87C]/20 bg-white">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-2xl font-bold text-[#C8A87C]">${cartTotal.toFixed(2)}</span>
          </div>
          <button 
            onClick={() => { setIsCartOpen(false); setCheckoutStep('checkout'); }}
            className="w-full bg-[#4A3728] text-white py-4 rounded-xl font-semibold hover:bg-[#5D4037] transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  </div>
)}

{/* Checkout Modal */}
{checkoutStep === 'checkout' && (
  <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn" onClick={() => setCheckoutStep(null)}></div>
    <div className="relative bg-[#FFF8F0] w-full max-w-lg rounded-2xl shadow-2xl p-8 animate-fadeInUp max-h-[90vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <button onClick={() => setCheckoutStep(null)} className="p-2 hover:bg-[#C8A87C]/10 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div className="bg-white rounded-xl p-4 mb-6 space-y-3">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>{item.name} x{item.qty}</span>
            <span className="font-semibold">${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t border-[#C8A87C]/20 pt-3 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span className="text-[#C8A87C]">${cartTotal.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleCheckout} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name *</label>
          <input 
            required
            type="text" 
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#C8A87C]/20 focus:border-[#C8A87C] focus:outline-none transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Phone Number *</label>
          <input 
            required
            type="tel" 
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#C8A87C]/20 focus:border-[#C8A87C] focus:outline-none transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Delivery Address *</label>
          <textarea 
            required
            rows={3}
            value={formData.address}
            onChange={e => setFormData({...formData, address: e.target.value})}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#C8A87C]/20 focus:border-[#C8A87C] focus:outline-none transition-colors"
            placeholder="Street, City, State, ZIP"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Order Notes</label>
          <textarea 
            rows={2}
            value={formData.notes}
            onChange={e => setFormData({...formData, notes: e.target.value})}
            className="w-full px-4 py-3 rounded-xl bg-white border border-[#C8A87C]/20 focus:border-[#C8A87C] focus:outline-none transition-colors"
            placeholder="Allergies, delivery instructions, etc."
          />
        </div>
        <div className="bg-[#C8A87C]/10 rounded-xl p-4 flex items-center gap-3">
          <svg className="w-6 h-6 text-[#C8A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <div>
            <div className="font-bold">Pay on Delivery</div>
            <div className="text-sm text-[#4A3728]/70">Cash or card when your order arrives</div>
          </div>
        </div>
        <button type="submit" className="w-full bg-[#4A3728] text-white py-4 rounded-xl font-semibold hover:bg-[#5D4037] transition-colors text-lg">
          Place Order
        </button>
      </form>
    </div>
  </div>
)}

{/* Success Modal */}
{checkoutStep === 'success' && (
  <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"></div>
    <div className="relative bg-[#FFF8F0] w-full max-w-md rounded-2xl shadow-2xl p-8 animate-fadeInUp text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
      <h2 className="text-3xl font-bold mb-2">Order Placed!</h2>
      <p className="text-[#4A3728]/70 mb-8">Thank you, {formData.name}. We have received your order and will call {formData.phone} to confirm delivery.</p>
      <button 
        onClick={() => { setCheckoutStep(null); setFormData({ name: '', phone: '', address: '', notes: '' }); }}
        className="bg-[#4A3728] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#5D4037] transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  </div>
)}
</>
);
};
export default Cart;