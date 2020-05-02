import UserProfileComponent from "./components/user-profile";
import MenuComponent from "./components/menu";
import SortComponent from "./components/sort";
import ContainerComponent from "./components/content-container";
import {films} from "./mock/film";
import {user} from "./mock/user";
import {menuItems} from "./mock/menu";
import {render} from "./utils/render";
import {PageController} from "./controllers/page";

const mainContainerElement = document.querySelector(`.main`);
const headerElement = document.querySelector(`.header`);

// Creating components
const userProfileComponent = new UserProfileComponent(user);
const menuComponent = new MenuComponent(menuItems);
const sortComponent = new SortComponent();
const containerComponent = new ContainerComponent();

const renderContainer = () => {
  render(headerElement, userProfileComponent);
  render(mainContainerElement, menuComponent);
  render(mainContainerElement, sortComponent);
  render(mainContainerElement, containerComponent);

  const pageController = new PageController(containerComponent);
  pageController.render(films);
};

renderContainer();
