import React from 'react';

import Panel from 'interface/others/Panel';
import HealingEfficiencyDetails from 'parser/core/healingEfficiency/HealingEfficiencyDetails';
import HealingEfficiencyTracker from 'parser/core/healingEfficiency/HealingEfficiencyTracker';
import HealingEfficiencyBreakdown from 'parser/core/healingEfficiency/HealingEfficiencyBreakdown';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';

class MistweaverHealingEfficiencyDetails extends HealingEfficiencyDetails {
  static dependencies = {
    healingEfficiencyTracker: HealingEfficiencyTracker,
  };

  tab() {
    return {
      title: 'Mana efficiency',
      url: 'mana-efficiency',
      render: () => {
        return (
          <Panel
            title="Mana efficiency"
            explanation={(
              <>
                <SpellLink id={SPELLS.GUSTS_OF_MISTS.id} /> healing is added to the appropriate spell that caused the gust. <SpellLink id={SPELLS.ESSENCE_FONT.id} /> is given the healing from duplicated gusts, since without EF the second gust would not have happened. <SpellLink id={SPELLS.RENEWING_MIST.id} /> is given the splash healing of <SpellLink id={SPELLS.VIVIFY.id} />'s heal since without Renewing Mist, Vivify wouldn't have splashed.
              </>
            )}
            pad={false}
          >
            <HealingEfficiencyBreakdown
              tracker={this.healingEfficiencyTracker}
              showSpenders
            />
          </Panel>
        );
      },
    };
  }
}

export default MistweaverHealingEfficiencyDetails;
