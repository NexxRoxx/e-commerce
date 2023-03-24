import React from "react";
import { Link } from "react-router-dom";

const SupportPage = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Support Center
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mt-8">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    How do I know which PC components are compatible with each
                    other?
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    We provide detailed information on each product page to help
                    you determine if the component is compatible with your
                    system. You can also contact our support team for assistance
                    with compatibility questions.
                  </dd>
                </div>

                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    What is your return policy?
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    We accept returns for most products within 30 days of
                    purchase, as long as the item is in its original condition
                    and packaging. Please see our Returns page for more
                    information.
                  </dd>
                </div>

                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    How do I track my order?
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Once your order has shipped, you will receive an email with
                    tracking information. You can also log in to your account to
                    view your order status and tracking information.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              Contact Us
            </h2>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-900">
                If you have any questions or concerns, please contact our
                support team:
              </p>
              <ul className="mt-4">
                <li>
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Email: support@mypccomponentsstore.com
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Phone: 1-800-123-4567
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Live Chat: Click here to chat with a support agent
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportPage;
