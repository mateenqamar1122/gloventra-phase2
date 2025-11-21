import React from 'react';

const ShippingInfo = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Shipping Information</h1>
        <p className="text-lg text-center text-muted-foreground mb-12">
          Everything you need to know about our shipping policies, methods, and delivery times.
        </p>

        <div className="space-y-10">
          {/* Domestic Shipping */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Domestic Shipping (Within Your Country)</h2>
            <p className="text-muted-foreground mb-6">
              We offer several shipping options to ensure your order arrives conveniently and quickly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Standard Shipping</h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Cost:</strong> $5.99 (Free for orders over $50)
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Delivery Time:</strong> 5-7 business days
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Details:</strong> Reliable and cost-effective option for non-urgent deliveries.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Express Shipping</h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Cost:</strong> $12.99
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Delivery Time:</strong> 2-3 business days
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Details:</strong> Faster delivery for when you need your items sooner.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Overnight Shipping</h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Cost:</strong> $24.99
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Delivery Time:</strong> 1 business day (if ordered before 2 PM EST)
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Details:</strong> Our fastest option for urgent deliveries.
                </p>
              </div>
            </div>
          </section>

          {/* International Shipping */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">International Shipping</h2>
            <p className="text-muted-foreground mb-6">
              We ship to a wide range of international destinations. Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.
            </p>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-foreground">International Standard</h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Cost:</strong> Varies by destination and weight
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Delivery Time:</strong> 7-21 business days
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Details:</strong> Trackable service for most international locations.
              </p>
            </div>
          </section>

          {/* Important Notes */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Important Notes</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Orders are typically processed within 1-2 business days.</li>
              <li>Delivery times are estimates and may vary due to unforeseen circumstances (e.g., weather, customs delays).</li>
              <li>You will receive a shipping confirmation email with tracking information once your order is dispatched.</li>
              <li>For any shipping-related inquiries, please contact our customer support.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;