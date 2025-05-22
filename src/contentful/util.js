import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import Link from "../components/link"
import styled from "styled-components"

const Bullet = styled.li`
  p {
    margin-bottom: 0;
  }
`

export const richTextRenderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <Link to={data.uri}>{children}</Link>
    ),
    [BLOCKS.LIST_ITEM]: (_, children) => <Bullet>{children}</Bullet>,
  },
}
