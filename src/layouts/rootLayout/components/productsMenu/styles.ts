import { Popover as RawPopover } from "@arkyn/components";
import { styled } from "@linaria/react";

const Popover = styled(RawPopover)`
  button {
    border: none;
    background: none;

    color: var(--text-heading);
    font-weight: 600;
    font-size: 14px;

    cursor: pointer;
  }

  .arkynPopoverContent {
    border: 1px solid var(--border);
    min-width: 500px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);

    a {
      display: flex;
      align-items: center;
      gap: 16px;

      padding: 12px 16px;
      text-decoration: none;

      svg {
        min-height: 24px;
        min-width: 24px;
        stroke-width: 2px;
        color: rgb(var(--spotlight-primary));
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;

        strong {
          color: var(--text-heading);
          font-weight: 600;
          font-size: 14px;
        }

        p {
          color: var(--text-body);
          font-size: 12px;
        }
      }

      &:not(:last-child) {
        border-bottom: 1px solid var(--border);
      }
    }
  }
`;

export { Popover };
