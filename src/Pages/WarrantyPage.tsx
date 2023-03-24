import React from "react";
import { Link } from "react-router-dom";

const WarrantyPage = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Warranty Information
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mt-8">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              Our Warranty Policy
            </h2>
            <div className="mt-6">
              <p className="text-base text-gray-500">
                We stand behind the quality of our products and offer a warranty
                on all hardware components sold through our store.
              </p>
              <p className="mt-4 text-base text-gray-500">
                Our warranty covers any defects in materials or workmanship for
                a period of one year from the date of purchase. If you
                experience any issues with a product covered by our warranty,
                please contact our support team for assistance.
              </p>
              <p className="mt-4 text-base text-gray-500">
                Please note that our warranty does not cover damage caused by
                misuse, abuse, or normal wear and tear. We also do not cover any
                damage that may result from improper installation or use of a
                product with incompatible components.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              How to Make a Warranty Claim
            </h2>
            <div className="mt-6">
              <p className="text-base text-gray-500">
                To make a warranty claim, please follow these steps:
              </p>
              <ol className="mt-4 list-decimal list-inside text-base text-gray-500">
                <li>
                  Contact our support team to report the issue and receive
                  instructions on how to proceed with your claim.
                </li>
                <li className="mt-2">
                  Pack the product securely in its original packaging or similar
                  packaging that will protect the product from damage during
                  shipment.
                </li>
                <li className="mt-2">
                  Ship the product to our returns center using a carrier that
                  provides tracking information. Please include a copy of your
                  original receipt or proof of purchase with your shipment.
                </li>
                <li className="mt-2">
                  Once we receive your shipment, we will inspect the product to
                  determine if it is covered by our warranty. If we determine
                  that the product is eligible for a warranty claim, we will
                  repair or replace the product at our discretion and ship it
                  back to you at no cost.
                </li>
              </ol>
              <p className="mt-4 text-base text-gray-500">
                Please note that the warranty claim process may take several
                weeks to complete, depending on the nature of the issue and the
                availability of replacement parts.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              Exclusions and Limitations
            </h2>
            <p className="mt-6 text-base text-gray-500">
              Our warranty is limited to the repair or replacement of the
              defective product, and we do not offer any other guarantees or
              warranties, either express or implied, including but not limited
              to warranties of merchantability or fitness for a particular
              purpose.
            </p>
            <p className="mt-4 text-base text-gray-500">
              In no event shall our liability exceed the purchase price of the
              product. We are not liable for any incidental or consequential
              damages, including but not limited to loss of use, loss of
              profits, or interruption of business.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Contact Us
          </h2>
          <div className="mt-6">
            <p className="text-base text-gray-500">
              If you have any questions or concerns about our warranty policy,
              please contact our support team:
            </p>
            <ul className="mt-4 list-disc list-inside text-base text-gray-500">
              <li>
                <Link to="#" className="text-indigo-600 hover:text-indigo-500">
                  Email: support@yourstore.com
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#" className="text-indigo-600 hover:text-indigo-500">
                  Phone: 1-800-123-4567
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#" className="text-indigo-600 hover:text-indigo-500">
                  Live Chat: Click here to chat with a support agent
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WarrantyPage;
