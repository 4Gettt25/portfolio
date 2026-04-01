const birthDate = new Date(2002, 9, 25); // 25. Oktober 2002
const now = new Date();
let age = now.getFullYear() - birthDate.getFullYear();
if (
  now.getMonth() < birthDate.getMonth() ||
  (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())
) {
  age -= 1;
}

const birthday = birthDate
  .toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
  .replace(/ /g, "-");

const about = {
  name: "Felix Günther",
  about: "IT-Systemadministrator",
  bio: {
    de: "Wirtschaftsinformatiker mit Fokus auf Daten & IT-Infrastruktur.",
    en: "Business informatics graduate with a focus on data & IT infrastructure.",
  },
  longBio: {
    de: "Hey, ich bin Felix – dualer Student der Wirtschaftsinformatik mit einer echten Leidenschaft für IT-Systeme und Infrastruktur. Ich mag es, wenn Netzwerke und Server zuverlässig laufen – und sorge dafür, dass sie es tun. Hands-on, strukturiert und immer neugierig. Privat bastle ich gerne an Home-Networking und Self-Hosting-Projekten.",
    en: "Hey, I'm Felix – a Business Information Systems graduate with a real passion for IT systems and infrastructure. I like it when networks and servers run reliably – and I make sure they do. Hands-on, structured, and always curious. In my spare time, I enjoy tinkering with home networking and self-hosting projects.",
  },
  birthday,
  city: "Leipzig",
  age: age,
  degree: "B.Sc",
};

export default about;
