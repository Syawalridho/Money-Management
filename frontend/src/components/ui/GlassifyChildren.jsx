import React from "react";

function glassifyClasses(className = "") {
  if (!className) return "";
  return className
    .replace(/\bbg-white\b/g, "bg-white/10 backdrop-blur-md")
    .replace(/\bdark:bg-gray-800\b/g, "dark:bg-white/5")
    .replace(/\bshadow-md\b/g, "shadow-[0_4px_20px_rgba(0,0,0,0.25)]")
    .replace(/\bborder\b/g, "border border-white/10");
}

const GlassifyChildren = ({ children }) => {
  const recur = (child) => {
    if (!React.isValidElement(child)) return child;

    const newProps = {};
    if (child.props.className) {
      newProps.className = glassifyClasses(child.props.className);
    }

    if (child.props.children) {
      newProps.children = React.Children.map(child.props.children, recur);
    }

    return React.cloneElement(child, newProps);
  };

  return <>{React.Children.map(children, recur)}</>;
};

export default GlassifyChildren;
