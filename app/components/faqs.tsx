type Faq = {
  question: string,
  answer: string,
}
const faqs: Faq[] = [
  {
    question: "What happens if I do not renew after one year?",
    answer: "You can still use the app for free but you won't get any update from us.",
  },
  {
    question: "Can I get a refund after purchase?",
    answer: "Yes, you can get a refund within 14 days after purchase. Please contact us at contact@blademail.app",
  },
  {
    question: "Can I use Blade Mail on many machines?",
    answer: "Yes, you can use Blade Mail on unlimited machines. But not allowed to share the license with others.",
  },
  {
    question: "Where can I download my invoices?",
    answer: "You can generate invoice in the email sent after successfully purchase, which included license key."
  }
]

export default function Faqs() {
  return (
    <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:flex-col sm:align-center">
        <h2 id="faqs" className="text-5xl font-extrabold text-gray-900 sm:text-center">Frequently asked questions</h2>
      </div>
      <div className="mt-12 lg:max-w-7xl lg:mx-auto">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
          {faqs.map((faq, index) => (
            <div key={index}>
              <dt className="text-lg font-medium leading-6 text-gray-900">{faq.question}</dt>
              <dd className="mt-2 text-ba se text-gray-500">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div >
  )
}