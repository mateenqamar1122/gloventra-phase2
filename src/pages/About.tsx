import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">About Us</h1>
        <p className="text-lg text-center text-muted-foreground mb-12">
          Learn more about Gloventra Shop, our mission, and our commitment to quality.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Gloventra Shop was founded with a simple vision: to provide a seamless and enjoyable online shopping experience for everyone. We believe that quality products should be accessible, and customer satisfaction should be at the heart of everything we do. Starting as a small venture, we've grown into a trusted platform, thanks to our dedication to these core values.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our journey began with a passion for connecting people with products they love. We meticulously curate our collection, ensuring that every item meets our high standards for quality, durability, and style. From the latest tech gadgets to timeless fashion pieces, we strive to offer a diverse range that caters to all tastes and needs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to empower our customers by offering an unparalleled selection of products, competitive pricing, and exceptional customer service. We are committed to fostering a community where shopping is not just a transaction, but an experience filled with discovery and delight. We continuously innovate to improve our platform, making it more intuitive, secure, and user-friendly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Customer Centricity:</strong> Our customers are at the core of everything we do. We listen, we adapt, and we strive to exceed expectations.
            </li>
            <li>
              <strong>Quality Assurance:</strong> We are committed to offering only the highest quality products from reputable suppliers.
            </li>
            <li>
              <strong>Integrity:</strong> We operate with transparency, honesty, and ethical practices in all our dealings.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace new technologies and ideas to enhance the shopping experience and stay ahead of trends.
            </li>
            <li>
              <strong>Community:</strong> We believe in building strong relationships with our customers, partners, and employees.
            </li>
          </ul>
        </section>

        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Join Our Journey</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We invite you to explore Gloventra Shop and become a part of our growing family. Experience the difference that passion, quality, and dedication can make.
          </p>
          <a href="/products" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
            Shop Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;