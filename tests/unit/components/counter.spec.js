import {shallowMount, mount} from '@vue/test-utils';
import Counter from '@/components/Counter'


describe('Counter Component', () =>{

    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(Counter)
    })

    test('H2 debe de tener el valor por defecto counter', () =>{
        
        expect(wrapper.find('h2').exists()).toBe(true)
        
        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')
    })

    test('El valor por defecto debe de ser 100 en el p', ()=>{
        
        const pTag = wrapper.find('[data-test="Counter"]').text()
        expect (pTag).toBe('100')

    })

    test('Debe incrementar en 1 el valor del contador', async() => {
        
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

    test('Debe de establecer el valor por defecto',()=>{

         // const start = wrapper.props('start')
        const {start} = wrapper.props()
        const value = wrapper.find('[data-test="Counter"]').text()
        expect(Number(value)).toBe(start)
        
    })

    test('Debe de mostrar la prop title',()=>{
        
        const wrapper = shallowMount(Counter,{
            props:{
                title: 'Hola mundo'
            }
        })

        expect(wrapper.find('h2').text()).toBe('Hola Mundo')
    })


    
})

