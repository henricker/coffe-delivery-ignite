import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  BenefitContainer,
  BenefitIconContainer,
  ListBenefitsContainer,
  RowContainer,
} from './style'

export function Benefits() {
  return (
    <ListBenefitsContainer>
      <RowContainer>
        <BenefitContainer>
          <BenefitIconContainer color="#C47F17">
            <ShoppingCart size={16} weight="fill" />
          </BenefitIconContainer>
          <p>Compra simples e segura</p>
        </BenefitContainer>
        <BenefitContainer>
          <BenefitIconContainer color="#DBAC2C">
            <Timer size={16} weight="fill" />
          </BenefitIconContainer>
          <p>Entrega rápida e rastreada</p>
        </BenefitContainer>
      </RowContainer>
      <RowContainer>
        <BenefitContainer>
          <BenefitIconContainer color="#574F4D">
            <Package size={16} weight="fill" />
          </BenefitIconContainer>
          <p>Embalagem mantém o café intacto</p>
        </BenefitContainer>
        <BenefitContainer>
          <BenefitIconContainer color="#8047F8">
            <Coffee size={16} weight="fill" />
          </BenefitIconContainer>
          <p>O café chega fresquinho até você</p>
        </BenefitContainer>
      </RowContainer>
    </ListBenefitsContainer>
  )
}
