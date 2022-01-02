import {shallowMount, mount} from '@vue/test-utils';
import Counter from '@/components/Counter'


describe('Counter Component', () =>{
    test('H2 debe de tener el valor por defecto counter', () =>{
        
        const wrapper = shallowMount(Counter)
        expect(wrapper.find('h2').exists()).toBe(true)
        
        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')
    })

    test('El valor por defecto debe de ser 100 en el p', ()=>{
        
        //Wrapper
        const wrapper = shallowMount(Counter)

        const pTag = wrapper.find('[data-test="Counter"]').text()
        expect (pTag).toBe('100')

    })

    test('Debe incrementar en 1 el valor del contador', async() => {
        
        //Montar componente
        const wrapper = shallowMount(Counter)

        //Encontrar boton de aumento
        const [increaseBtn, decrement] = wrapper.findAll('button')

        //Darle clcik al boton aumento
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')


        //Darle clcik al boton decremento
        await decrement.trigger('click')
        await decrement.trigger('click')

        //Encontrar el valor que queremos evaluar modificado por el btn
        const value = wrapper.find('[data-test="Counter"]').text()

        //Evaluar que el valor modificado por el btn sea el esperado
        expect(value).toBe('101')
    })
})






// import {shallowMount, mount } from '@vue/test-utils'
// import Counter from '@/components/Counter'

// describe('Counter Component', ()=> {
//     // test('Debe de hacer math con el snapshot', ()=>{
//     //     const wrapper = shallowMount(Counter)
//     //     expect(wrapper.html()).toMatchSnapshot()
//     // })

//     test('H2 debe de tener el valor por defecto', () =>{
        
//         const wrapper = shallowMount(Counter)

//         expect (wrapper.find('h2').exists()).toBe(true)

//         const h2Value = wrapper.find('h2').text()

//         expect(h2Value ).toBe('Counter')
//     })
// })


