import React, {
  useRef,
  createContext,
  useMemo,
  useState,
  useEffect
} from "react";
import { useTitleInput } from "./hooks/useTitleInput";
import Toggle from "./Toggle";
import { useSpring, animated } from "react-spring";
import useAbortableFetch from "use-abortable-fetch";
import Counter from "./Counter";

export const UserContext = createContext();
const App = () => {
  const [name, setName] = useTitleInput("");
  const [dishes, setDishes] = useState([]);
  const ref = useRef();
  const { data = [], loading } = useAbortableFetch(
    "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
  );

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  // const reverseWord = word => {
  //   return word
  //     .split("")
  //     .reverse()
  //     .join("");
  // };
  const title = "Level up Dishes";
  // const TitleReversed = useMemo(() => reverseWord(title), [title]);

  const submitForm = () => {
    console.log("hiii");
  };

  return (
    <UserContext.Provider value={{ user: true }}>
      <div className="main-wrapper" ref={ref}>
        <animated.h1
          style={props}
          onClick={() => ref.current.classList.add("new-fake-class")}
        >
          {title}
        </animated.h1>
        <Toggle />
        {/* <Counter /> */}
        <form
          onSubmit={e => {
            e.preventDefault();
            submitForm();
          }}
        >
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <button>Submit</button>
        </form>
        {data &&
          data.map(dish => (
            <article className="dish-card dish-card--withImage">
              <h3>{dish.name}</h3>
              <p>{dish.desc}</p>
              <div className="ingredients">
                {dish.ingredients.map(ingredient => (
                  <span>{ingredient}</span>
                ))}
              </div>
            </article>
          ))}
      </div>
    </UserContext.Provider>
  );
};

export default App;
