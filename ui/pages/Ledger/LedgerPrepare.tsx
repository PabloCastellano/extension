import React, { ReactElement } from "react"
import LedgerContinueButton from "../../components/Ledger/LedgerContinueButton"
import LedgerPanelContainer from "../../components/Ledger/LedgerPanelContainer"

export default function LedgerPrepare({
  onContinue,
}: {
  onContinue: () => void
}): ReactElement {
  return (
    <LedgerPanelContainer
      indicatorImageSrc="/images/connect_ledger_indicator_disconnected.svg"
      heading="Before we get started"
      subHeading="Make sure you take these 2 steps before we start"
    >
      <ol className="steps">
        <li>Plug in Ledger</li>
        <li>Enter pin to unlock</li>
        <li>Open Ethereum App</li>
      </ol>
      <LedgerContinueButton onClick={onContinue}>Continue</LedgerContinueButton>
      <style jsx>{`
        .steps {
          list-style: none;
          padding: 0.5rem;
          counter-reset: step;
          background-color: var(--hunter-green);
        }

        .steps > li {
          display: flex;
          align-items: center;
          font-size: 22px;
          font-weight: 500;
          line-height: 32px;
        }

        .steps > li::before {
          content: counter(step);
          counter-increment: step;
          display: inline-block;
          width: 2.5rem;
          height: 2.5rem;
          margin: 1rem;
          margin-right: 2rem;
          border-radius: 1.25rem;
          border: 1px solid var(--green-60);
          color: var(--green-60);
          line-height: 2.5rem;
          vertical-align: middle;
          text-align: center;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
        }
      `}</style>
    </LedgerPanelContainer>
  )
}
