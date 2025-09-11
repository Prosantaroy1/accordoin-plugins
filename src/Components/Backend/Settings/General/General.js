import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";
import { themeOptions } from "../../../../utils/options";
import { themeSwitch } from "../../../../utils/functions";

const General = ({ attributes, setAttributes }) => {
  const { theme } = attributes;

  return (
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
  );
};

export default General;
