import "./App.css";
import Navbar from "./components/mainElements/NavBar";
import SideNavBar from "./components/mainElements/SideNavBar";
import DropDownNav from "./components/uiElements/DropDownNav";
import "./fonts/SUSE-Regular.ttf";
import NavLink from "./components/uiElements/NavLink";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  const subItems1 = [
    { label: "Sub Item 1", link: "#subitem1" },
    { label: "Sub Item 2", link: "#subitem2" },
    { label: "Sub Item 3", link: "#subitem3" },
  ];

  return (
    <>
      <Navbar />
      <SideNavBar customClassName="your-custom-class" position="right" />
      <section className="mainSection flex flex-col gap-3 p-2 py-5">
        {/* Nav Link (Bullet Style) */}
        <div className="componentBox bg-grey-800 bg-opacity-30 backdrop-blur-lg flex flex-col gap-3 mx-2 p-4 lg:mx-44">
          <h1 className="font-bold text-xl">Nav Link (Bullet Style)</h1>

          <div className="w-full flex flex-col lg:flex-row gap-4">
            {/* Demo Box */}
            <div className="bg-neutral-100 flex flex-col gap-1 w-fill lg:w-2/6 rounded-md border border-neutral-800 p-4">
              <div className="flex gap-1 items-center">
                <NavLink
                  href="/#"
                  isActive
                  className="bg-blue-200 text-neutral-600 font-semibold hover:bg-blue-300"
                >
                  Home
                </NavLink>
                <span className="text-sm text-neutral-400">
                  ⬅ Active Nav Link
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <NavLink
                  href="/about"
                  className="text-neutral-600 hover:bg-opacity-10"
                >
                  About
                </NavLink>
                <span className="text-sm text-neutral-400">
                  ⬅ Normal Nav Link
                </span>
              </div>
            </div>

            {/* Code Box */}
            <div className="flex flex-col gap-1 w-fill lg:w-full">
              <p className="Code">
                <span className="font-bold">Code Usage</span>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                  {`<NavLink href="#" isActive className="text-neutral-600 bg-blue-200 font-semibold hover:bg-blue-300"></NavLink>`}
                </SyntaxHighlighter>
              </p>

              <p className="Code">
                <span className="font-bold">Props</span>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                  {`NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};`}
                </SyntaxHighlighter>
              </p>

              <p className="text-sm">🗨️ Classes can be edited as you wish</p>
            </div>
          </div>
        </div>

        {/* Drop Down Box */}
        <div className="componentBox bg-grey-800 bg-opacity-30 backdrop-blur-lg flex flex-col gap-3 mx-2 p-4 lg:mx-44">
          <h1 className="font-bold text-xl">Drop Down Box</h1>
          <div className="w-full flex flex-col lg:flex-row gap-4">
            {/* Demo Box */}
            <div className="bg-neutral-100 flex flex-col gap-3 w-fill lg:w-2/6 rounded-md border border-neutral-800 p-4">
              <DropDownNav
                title="Drop Down Box"
                customClassName={"text-neutral-600 p-2"}
                subCustomClassName={"hover:bg-blue-100"}
                subItems={subItems1}
              />
              <DropDownNav
                title="Drop Down Box"
                customClassName={"text-neutral-600 bg-blue-200 p-2"}
                subCustomClassName={"hover:bg-blue-100"}
                subItems={subItems1}
              />
            </div>

            {/* Code Box */}
            <div className="flex flex-col gap-1 w-fill lg:w-full">
              <p className="Code">
                <span className="font-bold">Code Usage</span>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                  {`<DropDownNav title="Drop Down Box" customClassName={"text-neutral-600"}  subCustomClassName={"hover:bg-blue-100"} subItems={itemList} />`}
                </SyntaxHighlighter>
              </p>

              <p className="Code">
                <span className="font-bold">Props</span>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                  {`DropDownNav.propTypes = {
  title: PropTypes.string,
  customClassName: PropTypes.string,
  subCustomClassName: PropTypes.string,
  subItems: PropTypes.object,
};

const subItems = [
  { label: "Sub Item 1", link: "#subitem1" },
];`}
                </SyntaxHighlighter>
              </p>

              <p className="text-sm">🗨️ Classes can be edited as you wish</p>
            </div>
          </div>

          <h1 className="font-bold text-xl">Drop Down Box (Sub Item)</h1>
          <div className="w-full flex flex-col lg:flex-row gap-4">
            {/* Code Box */}
            <div className="flex flex-col gap-1 w-fill lg:w-full">
              <p className="Code">
                <span className="font-bold">Code Usage</span>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                  {`<DropDownSubNav subCustomClassName={subCustomClassName} index={index} link={link} label={label}></DropDownSubNav>`}
                </SyntaxHighlighter>
              </p>

              <p className="Code">
                <span className="font-bold">Props</span>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                  {`DropDownSubNav.propTypes = {
  index: PropTypes.integer,
  subCustomClassName: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string,
};`}            </SyntaxHighlighter>
              </p>

              <p className="text-sm">🗨️ Classes can be edited as you wish</p>
            </div>

            {/* Demo Box */}
            <div className="bg-neutral-100 flex flex-col gap-3 w-fill lg:w-2/6 rounded-md border border-neutral-800 p-4">
              <DropDownNav
                title="Drop Down Box"
                customClassName={"text-neutral-600 p-2"}
                subCustomClassName={"hover:bg-blue-100"}
                subItems={subItems1}
              />
              <DropDownNav
                title="Drop Down Box"
                customClassName={"text-neutral-600 bg-blue-200 p-2"}
                subCustomClassName={"hover:bg-blue-100"}
                subItems={subItems1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
