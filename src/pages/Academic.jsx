import "./pages.css";

function Academic() {
  const history = [
    {
      year: "2023 — Present",
      title: "B.Tech in Artificial Intelligence & Machine Learning",
      place: "SDM College of Engineering and Technology, Dharwad",
      note: "Focused on Python, C, and Data Structures & Algorithms, with an interest in AI/ML."
    },
    {
      year: "2021 — 2023",
      title: "Pre-University / Class XI–XII",
      place: "Sainiketan PU College",
      note: "Replace with your stream and a stand-out result if you'd like to mention it."
    },
    {
      year: "2021",
      title: "SSLC / Class X",
      place: "KLE School",
      note: "Replace with a short note if relevant."
    }
  ];

  return (
    <div className="page container">
      <p className="eyebrow">02 — academics</p>
      <h2>Academic background</h2>

      <div className="timeline section-gap">
        {history.map((item) => (
          <div className="timeline-item" key={item.title}>
            <span className="timeline-year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
            <p>{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academic;
