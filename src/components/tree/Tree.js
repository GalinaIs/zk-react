import 'rc-tree/assets/index.css'
import React from 'react'
import Tree, { TreeNode } from 'rc-tree'
import { Icon } from './Icon'

export default class ZkTree extends React.Component {
  onEnterActive = node => {
    return { height: node.scrollHeight }
  }

  render = () => {
    return (
      <div>
        <h2>Customize icon with element</h2>
        <Tree defaultExpandAll>
          <TreeNode icon={<span className="customize-icon" />} title="Parent">
            <TreeNode
              icon={<span className="customize-icon sub-icon" />}
              title="Child"
            />
          </TreeNode>
        </Tree>

        <h2>Customize icon with component</h2>
        <Tree defaultExpandAll>
          <TreeNode icon={Icon} title="Parent">
            <TreeNode icon={Icon} title="Child" />
          </TreeNode>
        </Tree>

        <h2>Customize icon with Tree prop</h2>
        <Tree defaultExpandAll icon={Icon}>
          <TreeNode title="Parent">
            <TreeNode title="Child" />
          </TreeNode>
        </Tree>
      </div>
    )
  }
}
