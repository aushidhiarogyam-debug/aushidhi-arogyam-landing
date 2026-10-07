import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "../components/legal-page";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Aushadhi Aarogyam" },
      {
        name: "description",
        content:
          "Read the terms for using the Aushadhi Aarogyam website, enquiring about products, and placing orders through our direct channels.",
      },
    ],
  }),
  component: TermsOfUsePage,
});

function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        These Terms of Use ("Terms") apply to your access to and use of the Aushadhi Aarogyam Pvt.
        Ltd. website and related product information. By using the website, you agree to these
        Terms. If you do not agree, please do not use the website. These Terms do not limit any
        rights you have under applicable consumer-protection law.
      </p>

      <LegalSection title="About this website">
        <p>
          This website introduces Aushadhi Aarogyam and its herbal wellness, skincare, haircare,
          men's wellness, weight-management, immunity, and personal-care products. It supports
          enquiries and direct ordering conversations. It does not currently provide an online
          checkout, account, or payment facility.
        </p>
      </LegalSection>

      <LegalSection title="Product information and health disclaimer">
        <p>
          We aim to keep product descriptions, ingredients, images, and other information useful and
          current. Images and descriptions are illustrative and may not capture every detail;
          packaging, formulation, and availability may change. Please confirm ingredients, usage
          directions, price, and availability with us before ordering if a detail is important to
          you.
        </p>
        <p>
          Website content is for general information only. It is not medical advice, diagnosis, or
          treatment, and product statements are not a guarantee of a particular health result.
          Individual responses vary. Consult a qualified healthcare professional before using a
          product if you are pregnant or nursing, have a medical condition, take medication, or have
          concerns about allergies or interactions. Follow the product label and do not exceed its
          directions.
        </p>
      </LegalSection>

      <LegalSection title="Enquiries, orders, and payment">
        <p>
          Product enquiries and orders are handled directly, generally through WhatsApp, telephone,
          or email. An enquiry is not an accepted order. An order is subject to our confirmation of
          the products, quantity, price, applicable charges or taxes, delivery availability, and
          payment method. The details we confirm with you for a specific order govern that
          transaction, subject to applicable law.
        </p>
        <p>
          Do not send card numbers, banking passwords, one-time passcodes, or other payment
          credentials by message or email. Use only the payment method and instructions confirmed by
          us for your order.
        </p>
      </LegalSection>

      <LegalSection title="Delivery, cancellations, returns, and refunds">
        <p>
          Delivery options, charges, and estimated timelines are confirmed during the order
          conversation and may depend on your location and product availability. If you need to
          change or cancel an order, contact us as soon as possible; a request may not be possible
          once an order has been prepared or dispatched. Any return, replacement, or refund will be
          handled according to the terms confirmed for that order and applicable law. Nothing in
          these Terms removes rights that cannot legally be excluded.
        </p>
      </LegalSection>

      <LegalSection title="Promotions and availability">
        <p>
          Offers may be time-limited, subject to stated conditions, and changed or withdrawn where
          permitted by law. We may correct errors or update the website, product listings, and
          availability information. A change to a listing does not alter an order we have already
          confirmed except as permitted by law or agreed with you.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>
          You agree not to misuse the website, attempt unauthorised access, interfere with its
          operation, introduce malicious code, scrape or harvest information unlawfully, or use
          website content in a way that violates another person's rights or applicable law. You are
          responsible for the accuracy of information you choose to provide when contacting us.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property and external services">
        <p>
          Unless otherwise stated, the website's text, branding, graphics, and other content belong
          to Aushadhi Aarogyam or are used with permission. You may view and use the website for
          personal, non-commercial purposes. You may not reproduce or commercially exploit website
          content without prior written permission, except where the law allows. Links and contact
          options may open services operated by third parties; their terms and privacy practices
          apply to your use of those services.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers and liability">
        <p>
          We provide the website and its general content on an "as available" basis and take
          reasonable care to maintain it, but do not promise uninterrupted or error-free access. To
          the extent permitted by law, Aushadhi Aarogyam is not liable for indirect or consequential
          loss arising from use of the website or reliance on general website information. This does
          not exclude liability that cannot be excluded under applicable law, including your
          non-waivable consumer rights.
        </p>
      </LegalSection>

      <LegalSection title="Changes, governing law, and contact">
        <p>
          We may revise these Terms by publishing an updated version on this page. The updated Terms
          apply from publication to future website use; confirmed orders remain subject to their
          order-specific terms and applicable law. These Terms are governed by the laws of India.
          Courts with jurisdiction under applicable law may hear disputes.
        </p>
        <p>
          For questions about these Terms, contact us at{" "}
          <a className="font-medium text-primary underline" href="mailto:info@aushadhiaarogyam.com">
            info@aushadhiaarogyam.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
