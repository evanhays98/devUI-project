import React from 'react';
import {
  ComponentExplorer,
  DownloadButton,
  EditPanel,
  Header,
  SidePanel,
  useComponentNode,
} from '../../libs/core';
import { createUseStyles } from 'react-jss';
import { theme } from '../../libs/theme';
import DraggableComponentNode from '../../libs/core/DraggableComponentNode';
import { RightToolsButton } from '../../libs/core/RightToolsButton';

const useStyles = createUseStyles<string, {}, any>({
  containerComponent: {
    boxShadow: 'inset 0 0 10px 10px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      boxShadow: 'inset 0 0 10px 0 rgba(0, 0, 0, 1)',
    },
  },
  root: {
    overflowX: 'hidden',
    cursor: 'default',
    '& > *': {
      cursor: 'default',
    },
    userSelect: 'none',
  },
});

export const Create: React.FC = () => {
  const classes = useStyles({ theme });
  const { componentNode } = useComponentNode();

  return (
    <div>
      <RightToolsButton>
        <DownloadButton />
      </RightToolsButton>
      <SidePanel
        sideChildren={<EditPanel forPage />}
        leftChildren={<ComponentExplorer />}
        header={<Header forPage />}
      >
        <div className={classes.root}>
          {componentNode && <DraggableComponentNode node={componentNode} />}
        </div>
      </SidePanel>
    </div>
  );
};

export default Create;
