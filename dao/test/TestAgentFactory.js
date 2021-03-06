const Agent = artifacts.require('agent/Agentfactory.sol')


contract('AgentFactory', function () {

    let agentFactory

    beforeEach(async () => {
        agentFactory = await Agent.new()
    })

    it('verifies that someone can create a new agent', async () => {

        let result = await agentFactory.create()
        assert.isNotNull(result)

    })

    it('verifies that somehow can create multiple agent', async () => {
        let result = await agentFactory.create()
        //console.log(result,result2)
        assert.isNotNull(result)
    })

})