import gies from "./assets/courses/gies.png";
import py5 from "./assets/courses/py5.png";
import mcf from "./assets/courses/mcf.png";
import mi from "./assets/courses/mi.png";

const coursesData = [
  {
    id: 0,
    img: gies,
    instructor: "Stefan Zeume",
    title: "Financial Management",
    description: "Learn Financial management from TOP instructors",
    price: 150,
  },
  {
    id: 1,
    img: py5,
    instructor: "Christopher Brooks",
    title: "Python Software Engnineerign Project",
    description: "Make a python project with Pillow, and other libraries",
    price: 50,
  },
  {
    id: 2,
    img: mcf,
    instructor: "Steve Arthur",
    title: "Business management",
    description: "Learn How to Grow Your Busines",
    price: 75,
  },
  {
    id: 3,
    img: mi,
    instructor: "John Steve",
    title: "Automation with Python",
    description: "Get into automation with python",
    price: 25,
  },
];

const coursesMap = new Map(coursesData.map((course) => [course.id, course]));

export { coursesData, coursesMap };
