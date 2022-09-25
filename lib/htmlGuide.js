const path = require("path");
const fs = require("fs");

const layoutDir = path.resolve(__dirname, "../lib/layout");

const render = employees => {
    const html = [];

    html.push(employees
        .filter(employees => employees.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );
    return renderIndex(html.join(""));
};

const renderManager = manager => {
    let layout = fs.readFileSync(path.resolve(layoutDir, "manager.html"), "utf8");
    layout = replacePlaceholders(layout, "name", manager.getName());
    layout = replacePlaceholders(layout, "role", manager.getRole());
    layout = replacePlaceholders(layout, "email", manager.getEmail());
    layout = replacePlaceholders(layout, "id", manager.getId());
    layout = replacePlaceholders(layout, "officeNumber", manager.getOfficeNumber());
    return layout;
};

const renderEngineer = engineer => {
    let layout = fs.readFileSync(path.resolve(layoutDir, "engineer.html"), "utf8");
    layout = replacePlaceholders(layout, "name", engineer.getName());
    layout = replacePlaceholders(layout, "role", engineer.getRole());
    layout = replacePlaceholders(layout, "email", engineer.getEmail());
    layout = replacePlaceholders(layout, "id", engineer.getId());
    layout = replacePlaceholders(layout, "github", engineer.getGithub());
    return layout;
};

const renderIntern = intern => {
    let layout = fs.readFileSync(path.resolve(layoutDir, "intern.html"), "utf8");
    layout = replacePlaceholders(layout, "name", intern.getName());
    layout = replacePlaceholders(layout, "role", intern.getRole());
    layout = replacePlaceholders(layout, "email", intern.getEmail());
    layout = replacePlaceholders(layout, "id", intern.getId());
    layout = replacePlaceholders(layout, "school", intern.getSchool());
    return layout;
}

const renderIndex = html => {
    const layout = fs.readFileSync(path.resolve(layoutDir, "index.html"), "utf8");
    return replacePlaceholders(layout, "team", html);
};

const replacePlaceholders = (layout, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return layout.replace(pattern, value);
};

module.exports = render;