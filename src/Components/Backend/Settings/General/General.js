import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";
import { ItemsPanel } from '../../../../../../bpl-tools/Components';
import { themeOptions } from "../../../../utils/options";
import { themeSwitch } from "../../../../utils/functions";
import TestimonialPanel from '../TestimonialPanel/TestimonialPanel';

const General = ({ attributes, setAttributes }) => {
  const { theme, activeIndex } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Theme Switch", "pratics-purpuse")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Theme", "pratics-purpuse")}
          labelPosition="left"
          value={theme}
          options={themeOptions}
          onChange={(v) => setAttributes(themeSwitch(v, attributes))}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Testimonial Card Content", "pratics-purpuse")}
        initialOpen={true}
      >
        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="dataFaq"
          activeIndex={activeIndex}
          newItem={{
            "id": 1,
            "question": "what is your name ?",
            "answer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }}
          ItemSettings={TestimonialPanel}
          design="sortable"
          title='question'
        />

      </PanelBody>
    </>
  );
};

export default General;
