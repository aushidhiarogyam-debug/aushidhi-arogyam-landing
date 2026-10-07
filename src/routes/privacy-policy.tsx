import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "../components/legal-page";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Aushadhi Aarogyam" },
      {
        name: "description",
        content:
          "Learn how Aushadhi Aarogyam handles information shared through product enquiries, WhatsApp orders, feedback, and this website.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Aushadhi Aarogyam Pvt. Ltd. ("Aushadhi Aarogyam", "we", "us" or "our") respects your
        privacy. This policy explains how information may be handled when you visit this website,
        ask about our herbal wellness and personal-care products, contact us, or place an order
        through a third-party messaging or email service. It should be read together with our Terms
        of Use.
      </p>

      <LegalSection title="Information you choose to share">
        <p>
          Depending on how you contact us, you may share your name, phone number, email address,
          delivery address, product interests, order details, questions, and messages. Please do not
          send payment-card details, passwords, government identification numbers, or other
          sensitive information through ordinary email or messaging.
        </p>
        <p>
          The feedback form on this website opens a message in your own email application. The
          information in that message is sent only if you choose to send it from that application;
          this website does not submit the form to an on-site account or checkout system.
        </p>
      </LegalSection>

      <LegalSection title="Information collected through the website">
        <p>
          Our hosting and security providers may process technical information such as IP address,
          browser and device details, requested pages, and server logs to deliver, maintain, and
          protect the website. The website currently does not offer user accounts or an online
          payment checkout. If we add analytics, advertising, or other tracking technologies, we
          will update this policy and provide any notices or choices required by law.
        </p>
      </LegalSection>

      <LegalSection title="How we use information">
        <ul className="list-disc space-y-1 pl-6">
          <li>To respond to product questions, feedback, and other requests.</li>
          <li>To discuss product availability, prices, delivery, and order details.</li>
          <li>To coordinate and support an order you ask us to place.</li>
          <li>To operate, troubleshoot, and protect the website and our communications.</li>
          <li>To meet applicable legal obligations and address disputes or misuse.</li>
        </ul>
        <p>
          We do not use the contact details you provide here to send promotional messages unless you
          have asked for them or applicable law otherwise permits it. You can ask us to stop
          promotional communication at any time.
        </p>
      </LegalSection>

      <LegalSection title="When information may be shared">
        <p>
          We do not sell your personal information. We may share information only as reasonably
          necessary with service providers who help host or secure the website, or to respond to you
          and fulfil a request or order. When you choose WhatsApp, email, or another external
          service to contact us, that provider processes information under its own privacy terms. We
          may also disclose information where required by law, to protect rights or safety, or in
          connection with a lawful business reorganisation.
        </p>
      </LegalSection>

      <LegalSection title="Retention and security">
        <p>
          We retain information for only as long as reasonably needed for the purposes described
          above, including customer support, recordkeeping, resolving disputes, and meeting legal
          requirements. Retention periods can depend on the type of information and the context of
          an enquiry or order. We use reasonable measures intended to protect information, but no
          website, email, or messaging transmission can be guaranteed completely secure.
        </p>
      </LegalSection>

      <LegalSection title="Your choices and rights">
        <p>
          You may contact us to request access to, correction of, or deletion of personal
          information you have shared with us, or to withdraw consent where processing is based on
          consent. We may need to retain some information to complete a request or meet legal
          obligations. Rights and response requirements depend on applicable law, including the
          Digital Personal Data Protection Act, 2023, and rules in force in India.
        </p>
      </LegalSection>

      <LegalSection title="Children and health information">
        <p>
          This website and our product enquiries are intended for adults. We do not knowingly seek
          personal information directly from children. Please contact us if you believe a child has
          provided information to us. Do not send medical records or sensitive health details
          through the website, WhatsApp, or ordinary email. Product descriptions are general
          information, not medical advice or a substitute for advice from a qualified healthcare
          professional.
        </p>
      </LegalSection>

      <LegalSection title="Changes and contact">
        <p>
          We may update this policy as our website, services, or legal obligations change. The
          latest version will appear on this page with its updated date. For privacy questions or
          requests, email{" "}
          <a className="font-medium text-primary underline" href="mailto:info@aushadhiaarogyam.com">
            info@aushadhiaarogyam.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
