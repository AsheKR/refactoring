import {ProductionPlan} from '../../src/9/03-replace-derived-variable-with-query'
import {expect, describe, it} from '@jest/globals'


describe('Test 09.03. Replace Derived Variable with Query', () => {
    it('aProductionPlan.production', async () => {
        const aProductionPlan = new ProductionPlan()
        aProductionPlan.applyAdjustment({'amount': 100})
        aProductionPlan.applyAdjustment({'amount': 300})
        expect(aProductionPlan.production).toEqual(400)
    })

})