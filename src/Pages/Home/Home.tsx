import React, { useMemo } from 'react';
import { componentsConfiguration, FolderType } from '../../libs/Datas';
import {
  ChapterBlock,
  ColorDisplay,
  EditableComponent,
  EditPanel,
  Footer,
  Header,
  SidePanel,
} from '../../libs/core';
import { useCustomStyle } from '../../libs/core/StyleContext';

export const Home = () => {
  const { values } = useCustomStyle();

  const variants = useMemo(() => {
    return Object.keys(values)
      .filter((key) => key !== 'colors' && key.includes('-'))
      .reduce(
        (acc, key) => {
          const [componentName, variantName] = key.split('-');
          if (!acc[componentName]) acc[componentName] = [];
          acc[componentName].push(variantName);
          return acc;
        },
        {} as Record<string, string[]>,
      );
  }, [values]);

  const renderComponents = (folder: FolderType) => {
    return Object.entries(componentsConfiguration)
      .filter(([_, component]) => component.folder === folder)
      .map(([key, component]) => (
        <React.Fragment key={key}>
          <EditableComponent component={key} name={key}>
            {component.renderField()}
          </EditableComponent>
          {variants[key]?.map((variant) => (
            <EditableComponent
              key={`${key}-${variant}`}
              component={`${key}-${variant}`}
              name={`${key}-${variant}`}
              isVariant
            >
              {component.renderField({ variant: `${key}-${variant}` })}
            </EditableComponent>
          ))}
        </React.Fragment>
      ));
  };

  return (
    <SidePanel sideChildren={<EditPanel />} header={<Header />}>
      <ChapterBlock style={{ gap: 32, padding: 20 }}>
        <ChapterBlock title="Palettes de couleurs" separator>
          {Object.entries(values.colors).map(([key, value]) => (
            <ColorDisplay
              key={value as string}
              name={key}
              value={value as string}
            />
          ))}
          <ColorDisplay add />
        </ChapterBlock>
        <ChapterBlock title="Texts" separator>
          {renderComponents(FolderType.Texts)}
        </ChapterBlock>
        <ChapterBlock title="Buttons" separator>
          {renderComponents(FolderType.Buttons)}
        </ChapterBlock>
        <ChapterBlock title="Blocks" separator>
          {renderComponents(FolderType.Blocks)}
        </ChapterBlock>
      </ChapterBlock>
      <Footer />
    </SidePanel>
  );
};
