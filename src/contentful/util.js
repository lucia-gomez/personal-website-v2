import { INLINES } from "@contentful/rich-text-types"
import Link from "../components/link"

export const richTextRenderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <Link to={data.url}>{children}</Link>
    ),
  },
}
