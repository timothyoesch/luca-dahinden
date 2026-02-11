export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    // Send post request to the backend API https://n8n.victorinus.ch/webhook/0722f559-0462-49a7-98c1-4d6771495a5d
    await $fetch('https://n8n.victorinus.ch/webhook-test/0722f559-0462-49a7-98c1-4d6771495a5d', {
        method: 'POST',
        body,
    })
    return {
        success: true,
        data: body,
    }
})