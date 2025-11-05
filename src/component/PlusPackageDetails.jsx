import React from 'react';

const FeatureList = ({ title, children }) => (
    <>
      <h2 className="luxury-regular text-[#1D1D1F] lg:text-[30px] text-[25px] leading-tight my-7">
        {title}
      </h2>
      <ul className="list-disc pl-5 my-5 space-y-7 marker:text-[#EB4209]">
        {children}
      </ul>
    </>
  );

const ListItem = ({ children }) => (
    <li className="manifest-regular text-[#1D1D1F] text-base leading-[28px] mb-2">
      {children}
    </li>
  );

const PlusPackageDetails = () => {
  return (
    <section className="lg:py-24 2xl:px-0 py-12 px-6">
      <div className="container mx-auto">
        <div className="w-full">
          {/* Main Title */}
          <h2 className="luxury-regular text-[#1D1D1F] lg:text-[64px] text-[30px] leading-tight mb-4">
            Plus
          </h2>

          {/* Introductory Headline */}
          <h2 className="luxury-regular text-[#1D1D1F] lg:text-[30px] text-[25px] leading-tight my-7">
            Achieve A Picturesque Book Cover With The Plus Package
          </h2>
          <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
            No one will even consider judging your book by its cover. With the Plus Package, if you want the highest level of attention made for your book cover, this one’s for you. Enhance your self-publishing journey with more incredible features, including the <strong>advanced cover design</strong>, <strong>cover copy polish</strong>, an option to <strong>set your book’s retail price</strong>, a <strong>video and podcast interview</strong>, and more! The Plus Package has all the features of the Essential Package but is for more devoted authors looking to put in more time and energy.
          </p>

          {/* Perfect Book Cover And Title */}
          <h2 className="luxury-regular text-[#1D1D1F] lg:text-[30px] text-[25px] leading-tight my-7">
            The Perfect Book Cover And Title
          </h2>
          <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px] ">
            Benefit from valued time dedicated to your book cover with <strong>advance cover design</strong>. Our design team of professionals will work with you to create the perfect visual that fits your story entirely. The same goes for your book’s title. If you haven’t settled on a book title and want the best possible title for your book, our professional copywriters will come up with one with care and attention.
          </p>

          {/* Your Book. Your Price. */}
          <h2 className="luxury-regular text-[#1D1D1F] lg:text-[30px] text-[25px] leading-tight my-7">
            Your Book. Your Price.
          </h2>
          <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px] ">
            You’ve worked hard to write your book, and with the Plus Package, you can <strong>name its price</strong>. Sometimes, a price change can be a viable option to compete with similar books in the marketplace. We want you to have that option if you may need it in the future.
          </p>

          {/* Promoting The Podcast Way */}
          <h2 className="luxury-regular text-[#1D1D1F] lg:text-[30px] text-[25px] leading-tight my-7">
            Promoting The Podcast Way
          </h2>
          <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px] ">
            Be featured on the podcast segment <strong>Book Round-up of the podcast, The Book Connection</strong>. You’ll receive a <strong>video interview</strong> promoting your published work. Exposure in many different mediums helps with seeking more eyes on your book and allows you to learn how to sell your book better.
          </p>

          {/* Testimonial Quote */}
          <div className="bg-[#F35C2A] lg:p-10 p-4 rounded-lg text-center my-10">
            <h2 className="luxury-regular text-[#fff] text-xl leading-tight my-7">
              “Having The Final Say About My Manuscript Was Probably What I Valued Most, Along With The Fantastic Support From Everyone Associated With Fawcett Publication My Journey Was So Much More Enjoyable Because Of Those People And The Help And Advice They Gave Throughout The Process.”
            </h2>
            <p className="text-white">- Angela Preston Of Opening Doors</p>
          </div>

          {/* More Than A Publisher */}
          <h2 className="luxury-regular text-[#1D1D1F] lg:text-[30px] text-[25px] leading-tight my-7">
            More Than A Publisher
          </h2>
          <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px] ">
            Fawcett Publication is the largest self-publisher committed to creating an amazing publishing experience. Here is what's included in the <strong>Starter Package</strong>:
          </p>

          {/* Formatting Features */}
          <FeatureList title="Formatting">
            <ListItem>
              <strong>Paperback Publishing</strong> - Your book will be available in the most popular format, made of quality, perfect binding, and acid-free library stock paper.
            </ListItem>
            <ListItem>
              <strong>Digital Formatting and Distribution</strong> - Your book will be distributed online as an e-Book and available through significant resellers like Amazon and Barnes & Noble.
            </ListItem>
          </FeatureList>

          {/* Production And Post Production Features */}
          <FeatureList title="Production And Post Production Features">
            <ListItem>
              <strong>Worldwide Online Distribution</strong> - Your book will be available for sale online through external retailers such as Amazon, Barnes & Noble, and other resellers that may pick up your book from the Ingram and Baker & Taylor distribution networks.
            </ListItem>
            <ListItem>
              <strong>Standard Cover Design</strong> - A cover designer is assigned to your manuscript and, with some consultation and direction, designs a few cover options based on your vision and lets you pick which one best fits your book.
            </ListItem>
            <ListItem>
              <strong>Electronic Galley</strong> - Also referred to as “galley proof,” this is your cover and manuscript in a book layout with chapters and pagination. To ensure the final book design is 100% to your liking, galleys are e-mailed to you for review and approval before the book is ready for purchase.
            </ListItem>
            <ListItem>
              <strong>20 Image Insertions</strong> - You may provide imagery for your book’s interior pages, and these will be printed either in grayscale or in full color (for Full Color Books).
            </ListItem>
            <ListItem>
              <strong>One round of Interior Revisions</strong> - You may want to make changes to your manuscript after proofreading your galley. Each block of revisions allows you to submit up to 50 corrections. Publisher errors such as hyphenation, formatting issues, or misplaced graphics, which occurred during production, must also be noted on the proof form but will not count against the first 50 corrections.
            </ListItem>
            <ListItem>
              <strong>Standard Page Design</strong> - You will have a say in creating visually appealing page designs bringing your story to life, and building your book's layout that fits your needs.
            </ListItem>
            <ListItem>
              <strong>Amazon "Look Inside", Google, and Barnes & Noble "Read Instantly" Previews</strong> - Allow readers to take a peek inside your book creating interest online before purchasing it. Preview available on Amazon, Google, Barnes & Noble, etc.
            </ListItem>
          </FeatureList>

          {/* Registrations Features */}
          <FeatureList title="Registrations">
            <ListItem>
              <strong>ISBN Assignment</strong> - A 13-digit identifier is unique to your book and an industry requirement for distribution and retail sales. It allows distributors, retailers, printers, and readers to find and order your book easily.
            </ListItem>
          </FeatureList>

          {/* Copies Of Books Features */}
          <FeatureList title="Copies Of Books">
            <ListItem>
              <strong>50 Promotional Digital Bookstubs</strong> - As part of your marketing plan, offer promotional copies of your e-book using digital Bookstubs.
            </ListItem>
            <ListItem>
              <strong>$250.00 Credit for your First Book Order</strong> - Use your one-time single-use book credit to order paperbacks, hardcovers, or both on your author book order.
            </ListItem>
          </FeatureList>

          {/* Marketing Features */}
          <FeatureList title="Marketing Features">
            <ListItem>
              <strong>Author Website Setup (3 pages) with One Year of Hosting</strong> - Receive a professional author website that fits your style and is where readers can go to discover your book and learn about you as an author.
            </ListItem>
            <ListItem>
              <strong>New Releases Section on the AuthorHouse Bookstore</strong> - Have your book featured on our online bookstore’s ‘New Releases’ section spotlighting it for a limited time upon its publication date.
            </ListItem>
            <ListItem>
              <strong>Print-Ready Bookmarks Design File</strong> - These are the PDF files of bookmark design so you can print bookmarks at home or through a local printer to be used for promotional events.
            </ListItem>
            <ListItem>
              <strong>Book Sales Savvy Guide</strong> - With helpful exercises and practices, this marketing guide can give you the confidence and skills you need to draw bookstores to sell your book.
            </ListItem>
            <ListItem>
              <strong>Social Media Guide</strong> - Every author should have a presence on social media to stay connected with readers and attract new ones. We’ll provide you with a step-by-step guide on how to set up your channels, including Instagram, Facebook, Twitter, and LinkedIn.
            </ListItem>
          </FeatureList>

          {/* Add-On Services */}
          <FeatureList title="Add-On Services">
            <ListItem><strong>Hardcover Publishing</strong></ListItem>
            <ListItem><strong>Editorial Assessment</strong></ListItem>
            <ListItem><strong>Cover Copy Polish</strong></ListItem>
            <ListItem><strong>Press Release - 100 Outlets</strong></ListItem>
            <ListItem><strong>Standard Book Video</strong></ListItem>
            <ListItem><strong>Booksellers Return Program</strong></ListItem>
            <ListItem><strong>Custom Color Illustrations</strong></ListItem>
          </FeatureList>

        </div>
      </div>
    </section>
  );
};

export default PlusPackageDetails;