import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../../components/Form/Input'
import { FormContainer, InfoAddressMessage, FormContent } from './style'

export function Form() {
  return (
    <FormContainer>
      <InfoAddressMessage>
        <MapPinLine size={22} />{' '}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.5rem',
          }}
        >
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </InfoAddressMessage>

      <FormContent>
        <Input type="text" placeholder="CEP" inputWidth={'35.7142857%'} />
        <Input type="text" placeholder="Rua" inputWidth={'100%'} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2.22222222%',
            justifyContent: 'flex-start',
          }}
        >
          <Input type="text" placeholder="Número" inputWidth={'35.7142857%'} />
          <Input
            type="text"
            placeholder="Complemento"
            isOptional={true}
            inputWidth={'64.4444444%'}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: '2.22222222%',
          }}
        >
          <Input type="text" placeholder="Bairro" inputWidth={'35.7142857%'} />
          <Input type="text" placeholder="Cidade" inputWidth={'51.1111111%'} />
          <Input type="text" placeholder="UF" inputWidth={'8.73015876%'} />
        </div>
      </FormContent>
    </FormContainer>
  )
}
