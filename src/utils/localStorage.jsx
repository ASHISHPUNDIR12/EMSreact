const employee = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription:
          "Design the homepage layout with modern UI components.",
        taskDate: "2024-12-20",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix UI Bugs",
        taskDescription: "Fix bugs in the UI of the homepage and login page.",
        taskDate: "2024-12-15",
        category: "Development",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Optimize Database",
        taskDescription: "Optimize queries for better performance.",
        taskDate: "2024-12-18",
        category: "Database",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build API Endpoints",
        taskDescription: "Develop RESTful API endpoints for user management.",
        taskDate: "2024-12-19",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Set Up Database",
        taskDescription: "Set up the PostgreSQL database and tables.",
        taskDate: "2024-12-17",
        category: "Database",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for the authentication module.",
        taskDate: "2024-12-21",
        category: "Testing",
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Review Pull Requests",
        taskDescription: "Review pull requests from other team members.",
        taskDate: "2024-12-14",
        category: "Code Review",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update the API documentation with recent changes.",
        taskDate: "2024-12-22",
        category: "Documentation",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Refactor Codebase",
        taskDescription:
          "Refactor the authentication code for better readability.",
        taskDate: "2024-12-20",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Implement Caching",
        taskDescription:
          "Implement caching for the homepage to speed up load times.",
        taskDate: "2024-12-16",
        category: "Performance",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Payment Integration",
        taskDescription: "Integrate payment gateway for user subscriptions.",
        taskDate: "2024-12-18",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy the website to production on AWS.",
        taskDate: "2024-12-17",
        category: "Deployment",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Improve UI for Mobile",
        taskDescription: "Adjust UI layout for better mobile experience.",
        taskDate: "2024-12-19",
        category: "Design",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Fix Mobile Responsiveness",
        taskDescription: "Fix issues related to mobile responsiveness.",
        taskDate: "2024-12-14",
        category: "Design",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];
export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalstorage = () => {
  const employeeData = JSON.parse(localStorage.getItem("employee"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  return { employeeData, adminData };
};
