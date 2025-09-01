import uploadIcon from '../images/submit.webp';
import reviewIcon from '../images/expert.webp';
import paymentIcon from '../images/payment.webp';
import qcIcon from '../images/review.webp';
import deliveryIcon from '../images/delivery.webp';
const steps = [
    {
        title: 'Submit Requirement',
        desc: 'Upload your draft, select services.',
        icon: uploadIcon,
    },
    {
        title: 'Expert Review',
        desc: 'PhD expert assesses & gives quote.',
        icon: reviewIcon,
    },
    {
        title: 'Payment',
        desc: 'Matched with subject editor.',
        icon: paymentIcon,
    },
    {
        title: 'QC & Review',
        desc: 'Reviewed for quality, originality.',
        icon: qcIcon,
    },
    {
        title: 'Final Delivery',
        desc: 'Delivered security revisions allowed.',
        icon: deliveryIcon,
    },
];


const servicesData = [
    {
        id: "research-planning",
        iicon: "📘",
        title: "Research Planning",
        tagline: "Start right, move faster",
        bullets: [
            "Validate topic and objectives",
            "Outline methodology clearly",
            "Provide supervisor-ready brief",
        ],
        price: "₹2,999",
        exploreHref: "/services#research-planning",
        sampleHref: "/samples/research-planning-sample.pdf",
    },
    {
        id: "data-services",
        iicon: "📊",
        title: "Data Services",
        tagline: "Stats & ML that hold up",
        bullets: [
            "Analyse in SPSS / R / Python",
            "Clean data with visuals",
            "Explain results clearly",
        ],
        price: "₹4,999",
        exploreHref: "/services#data-services",
        sampleHref: "/samples/data-services-sample.pdf",
    },
    {
        id: "editorial-support",
        iicon: "✍️",
        title: "Editorial Support",
        tagline: "Polished. Compliant. Clear",
        bullets: [
            "Edit language and structure",
            "Format to journal style",
            "Suggest reviewer-style fixes",
        ],
        price: "₹4,999",
        exploreHref: "/services#editorial-support",
        sampleHref: "/samples/editorial-support-sample.pdf",
    },
    {
        id: "publication-support",
        iicon: "📚",
        title: "Publication Support",
        tagline: "Submit with confidence",
        bullets: [
            "Target suitable journals",
            "Check ethics and policies",
            "Prepare letters and responses",
        ],
        price: "₹8,999",
        exploreHref: "/services#publication-support",
        sampleHref: "/samples/publication-support-sample.pdf",
    },
    {
        id: "academic-presentations",
        iicon: "🎓",
        title: "Academic Presentations",
        tagline: "Impactful visuals that land",
        bullets: [
            "Design slides and posters",
            "Build charts and infographics",
            "Provide speaker notes",
        ],
        price: "₹3,999",
        exploreHref: "/services#academic-presentations",
        sampleHref: "/samples/academic-presentations-sample.pdf",
    },
    {
        id: "consultation-support",
        iicon: "💡",
        title: "Consultation Support",
        tagline: "Expert guidance at every step",
        bullets: [
            "One-on-one project discussions",
            "Clarify methodology doubts",
            "Personalized research advice",
        ],
        price: "₹2,499",
        exploreHref: "/services#consultation-support",
        sampleHref: "/samples/consultation-support-sample.pdf",
    },
];
export { steps, servicesData };

