import React from "react";

// ✅ Main Component
export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col px-8 md:px-16 lg:px-24 py-">
      {/* ✅ Section Heading */}
      <h2 className="text-2xl md:text-2xl font-extrabold text-purple-700 mb-12 text-center md:text-left relative">
        SEO Projects
      </h2>

      {/* ✅ SEO Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {seoProjects.map((proj, i) => (
          <ProjectCard proj={proj} key={i} />
        ))}
      </div>
    </section>
  );
}

// ✅ Card Component
function ProjectCard({ proj }) {
  const Stat = ({ label, value, change, extra }) => (
    <div>
      <p className="text-gray-400">{label}</p>
      <p className="font-bold text-lg">
        {value}{" "}
        {change && (
          <span
            className={`text-xs ${
              change.includes("+") ? "text-green-400" : "text-red-400"
            }`}
          >
            {change}
          </span>
        )}
      </p>
      {extra && <p className="text-xs text-gray-500">{extra}</p>}
    </div>
  );

  return (
    <div className="rounded-2xl bg-white/5 shadow-xl flex flex-col overflow-hidden border border-white/10">
      {/* Image */}
      <div className="h-56 bg-black flex items-center justify-center overflow-hidden">
        <img
          src={proj.image}
          alt={proj.title}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 px-6 py-6">
        <h3 className="text-xl font-bold text-purple-800 mb-3">{proj.title}</h3>
        <p className="text-sm text-purple-400 mb-4">{proj.description}</p>

        {/* ✅ Render stats only if they exist */}
        {proj.stats && (
          <div className="grid grid-cols-2 gap-4 text-white text-sm">
            {proj.stats.visits && (
              <Stat
                label="Visits"
                value={proj.stats.visits.value}
                change={proj.stats.visits.change}
                extra={
                  proj.stats.visits.devices
                    ? `💻 ${proj.stats.visits.devices.desktop} / 📱 ${proj.stats.visits.devices.mobile}`
                    : null
                }
              />
            )}
            {proj.stats.uniqueVisitors && (
              <Stat
                label="Unique Visitors"
                value={proj.stats.uniqueVisitors.value}
                change={proj.stats.uniqueVisitors.change}
              />
            )}
            {proj.stats.conversion && (
              <Stat
                label="Conversion"
                value={proj.stats.conversion.value}
                change={proj.stats.conversion.change}
              />
            )}
            {proj.stats.pagesPerVisit && (
              <Stat
                label="Pages / Visit"
                value={proj.stats.pagesPerVisit.value}
                change={proj.stats.pagesPerVisit.change}
              />
            )}
            {proj.stats.avgVisitDuration && (
              <Stat
                label="Avg. Duration"
                value={proj.stats.avgVisitDuration.value}
                change={proj.stats.avgVisitDuration.change}
              />
            )}
            {proj.stats.bounceRate && (
              <Stat
                label="Bounce Rate"
                value={proj.stats.bounceRate.value}
                change={proj.stats.bounceRate.change}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ✅ SEO Projects DATA
const seoProjects = [
  {
    title: "Nairobi Camera House Traffic Analytics",
    description: "On-page and off-page SEO optimization for websites.",
    image: "/NCH.png",
    link: "https://nairobicamerahouse.com/",
    siteName: "nairobicamerahouse.co.ke",
    stats: {
      visits: {
        value: "5.5K",
        change: "+95.24%",
        devices: { desktop: "40.37%", mobile: "59.63%" }
      },
      uniqueVisitors: { value: "4.9K", change: "+109.43%" },
      conversion: { value: "1.07%", change: "+100%" },
      pagesPerVisit: { value: "1.7", change: "-27.08%" },
      avgVisitDuration: { value: "05:39", change: "-41.15%" },
      bounceRate: { value: "56.49%", change: "-9.19%" }
    }
  },
{
  title: "Fox Printers",
  description: "SEO traffic report and user engagement metrics.",
  image: "/fox.png", // Use your actual image path
  link: "https://foxprinters.com/",
  siteName: "imagesolutions.co.ke",
  stats: {
    visits: {
      value: "455",
      change: "+671.19%",
      devices: { desktop: "100%", mobile: "0%" }
    },
    uniqueVisitors: { value: "343", change: "+481.36%" },
    conversion: { value: "0%", change: "no change" },
    pagesPerVisit: { value: "1.8", change: "+76.7%" },
    avgVisitDuration: { value: "16:51", change: "+100%" },
    bounceRate: { value: "74.29%", change: "-25.71%" }
  }
},
{
  title: "Panda Phones SEO Analytics",
  description: "Website engagement and SEO performance summary for PandaPhones.",
  image: "/panda.png", // Update with actual image path
  link: "https://pandaphones.com/",
  siteName: "pandaphones.com",
  stats: {
    visits: {
      value: "112",
      change: "-79.78%",
      devices: { desktop: "100%", mobile: "0%" }
    },
    uniqueVisitors: { value: "112", change: "-70.76%" },
    conversion: { value: "0%", change: "no change" },
    pagesPerVisit: { value: "4", change: "+130.35%" },
    avgVisitDuration: { value: "07:17", change: "+107.11%" },
    bounceRate: { value: "0%", change: "-100%" }
  }
},
{
  title: "Rondamo Technologies SEO Report",
  description: "Traffic and performance metrics for Rondamo’s main website.",
  image: "/RND.png", // Replace with correct image file path
  link: "https://rondamo.co.ke/",
  siteName: "rondamo.co.ke",
  stats: {
    visits: {
      value: "14.5K",
      change: "-53.57%",
      devices: { desktop: "53.77%", mobile: "46.23%" }
    },
    uniqueVisitors: { value: "12.2K", change: "-49.43%" },
    conversion: { value: "0%", change: "no change" },
    pagesPerVisit: { value: "5.6", change: "+226.2%" },
    avgVisitDuration: { value: "14:51", change: "+128.46%" },
    bounceRate: { value: "72.54%", change: "-9.31%" }
  }
},
{
  title: "Mighty Ape SEO Performance",
  description: "User metrics and site behavior analytics for MightyApe Technologies.",
  image: "/MA.png", // Replace with your actual image path
  link: "https://mightyape.co.ke/",
  siteName: "mightyape.co.ke",
  stats: {
    visits: {
      value: "3.4K",
      change: "-23.72%",
      devices: { desktop: "51.38%", mobile: "48.62%" }
    },
    uniqueVisitors: { value: "2.9K", change: "-25.26%" },
    conversion: { value: "0%", change: "no change" },
    pagesPerVisit: { value: "1.3", change: "-9.6%" },
    avgVisitDuration: { value: "08:22", change: "-15.2%" },
    bounceRate: { value: "90.69%", change: "+8.37%" }
  }
},
{
  title: "Eleven Shops SEO Overview",
  description: "Preliminary SEO stats and traffic snapshot for elevenshops.com.",
  image: "/ES.png", // Replace with the correct image path
  link: "https://www.elevenshops.com/",
  siteName: "elevenshops.com",
  stats: {
    visits: {
      value: "186",
      change: "n/a",
      devices: { desktop: "100%", mobile: "0%" }
    },
    uniqueVisitors: { value: "186", change: "n/a" },
    conversion: { value: "0%", change: "no change" },
    pagesPerVisit: { value: "1", change: "n/a" },
    avgVisitDuration: { value: "00:00", change: "n/a" },
    bounceRate: { value: "100%", change: "n/a" }
  }
},
{
  title: "Nairobi Apple Store SEO Snapshot",
  description: "Semrush-based traffic and engagement overview for Nairobi Apple Store.",
  image: "/NAS.png", // Replace with your actual image path
  link: "https://nairobiapplestore.com/",
  siteName: "nairobiapplestore.com",
  stats: {
    visits: {
      value: "33",
      change: "n/a",
      devices: { desktop: "100%", mobile: "0%" }
    },
    uniqueVisitors: { value: "33", change: "n/a" },
    conversion: { value: "0%", change: "no change" },
    pagesPerVisit: { value: "9", change: "n/a" },
    avgVisitDuration: { value: "02:17", change: "n/a" },
    bounceRate: { value: "0%", change: "n/a" }
  }
},


{
  title: "Frontline Africa SEO Snapshot",
  description: "Traffic and performance overview for Frontline Africa Ltd.",
  image: "/FEA.png", // Update this path to your image file
  link: "https://frontlineafricaltd.com/",
  siteName: "frontlineafricaltd.com",
  stats: {
    visits: {
      value: "0",
      change: "n/a",
      devices: { desktop: "0%", mobile: "0%" }
    },
    uniqueVisitors: { value: "0", change: "n/a" },
    conversion: { value: "0%", change: "no change" },
    pagesPerVisit: { value: "0", change: "n/a" },
    avgVisitDuration: { value: "00:00", change: "n/a" },
    bounceRate: { value: "0%", change: "n/a" }
  }
},
{
  title: "City Laptop Shop SEO Analytics",
  description: "Engagement metrics and traffic insights for laptoppriceinkenya.com.",
  image: "/CITY.png", // Update with the actual image path
  link: "https://laptoppriceinkenya.com/",
  siteName: "laptoppriceinkenya.com",
  stats: {
    visits: {
      value: "37",
      change: "n/a",
      devices: { desktop: "100%", mobile: "0%" }
    },
    uniqueVisitors: { value: "37", change: "n/a" },
    conversion: { value: "0%", change: "no change" },
    pagesPerVisit: { value: "1.7", change: "n/a" },
    avgVisitDuration: { value: "00:00", change: "n/a" },
    bounceRate: { value: "29.73%", change: "n/a" }
  }
},
{
  title: "Nairobi Computers Analytics",
  description: "THE WEBSITE IS UNDER TESTING, NO ANALYTICS AT THE MOMENT.",
  image: "/NC.png", // Update with the actual image path
  link: "https://nairobicomputerstore.com/",
  
},
{
    title: "Nairobi Phones Technologies",
    description: "On-page and off-page SEO optimization for websites.",
    image: "/NPT.png",
    link: "https://nairobiphonestech.com/",
    siteName: "nairobicamerahouse.co.ke",
    stats: {
      visits: {
        value: "5.5K",
        change: "+95.24%",
        devices: { desktop: "40.37%", mobile: "59.63%" }
      },
      uniqueVisitors: { value: "4.9K", change: "+109.43%" },
      conversion: { value: "1.07%", change: "+100%" },
      pagesPerVisit: { value: "1.7", change: "-27.08%" },
      avgVisitDuration: { value: "05:39", change: "-41.15%" },
      bounceRate: { value: "56.49%", change: "-9.19%" }
    }
  },

];
