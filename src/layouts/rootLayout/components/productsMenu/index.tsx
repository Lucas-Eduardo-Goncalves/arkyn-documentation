import { LayoutTemplate, Rows3, Server, Waypoints } from "lucide-react";
import { Link } from "react-router";
import { Popover } from "./styles";

function ProductsMenu() {
  return (
    <Popover
      closeOnClick
      orientation="bottomRight"
      button={<button>Products</button>}
    >
      <Link to="/docs/components/introduction">
        <LayoutTemplate />
        <div>
          <strong>@arkyn/components</strong>
          <p>Foundational components for shipping features faster.</p>
        </div>
      </Link>
      <Link to="/docs/server/introduction">
        <Server />
        <div>
          <strong>@arkyn/server</strong>
          <p>Server-side functions and services for building robust APIs</p>
        </div>
      </Link>
      <Link to="/docs/shared/introduction">
        <Waypoints />
        <div>
          <strong>@arkyn/shared</strong>
          <p>
            Shared utilities, validations and formats for consistent design.
          </p>
        </div>
      </Link>
      <Link to="/docs/templates/introduction">
        <Rows3 />
        <div>
          <strong>@arkyn/templates</strong>
          <p>Pre-built templates for common application scenarios.</p>
        </div>
      </Link>
    </Popover>
  );
}

export { ProductsMenu };
