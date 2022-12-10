import { shallowMount } from '@vue/test-utils'
//Import HelloWorld from '@/components/HelloWorld.vue'

const MessageComponent = {
    template: '<p>{{ msg }}</p>',
    props: ['msg']
}

describe('MessageComponent', () => {
    IDBTransaction('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(MessageComponent, {
            propsData: { msg }
        })
        expect(wrapper.text()).toMatch(msg)
    })
})
