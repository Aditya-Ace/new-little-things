import NewLittleThingsList from "../components/newLittleThings/NewLittleThingsList"

const DUMMY_NEW_LITTLE_THINGS = [
  {
    id: "nlt1",
    title: "My first new Little Thing",
    image:
      "https://www.justalittlecreativity.com/wp-content/uploads/2016/01/thisamazinglife.jpg",
    punchLine: "Here we go...",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae velit aliquam quam. Quisquam cum soluta ratione quasi sint voluptatibus autem minus, veniam eos iusto molestias repellat reiciendis sed hic? Libero, vitae ut praesentium ex incidunt distinctio ducimus voluptatum, et temporibus totam nobis tempore cum vel neque doloremque architecto itaque!",
  },
  {
    id: "nlt2",
    title: "My second new Little Thing",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/98/71/93/pretty-little-things.jpg",
    punchLine: "Now or never...",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae velit aliquam quam. Quisquam cum soluta ratione quasi sint voluptatibus autem minus, veniam eos iusto molestias repellat reiciendis sed hic? Libero, vitae ut praesentium ex incidunt distinctio ducimus voluptatum, et temporibus totam nobis tempore cum vel neque doloremque architecto itaque!",
  },
]
function HomePage() {
  return <NewLittleThingsList newLittleThings={DUMMY_NEW_LITTLE_THINGS} />
}

export default HomePage
