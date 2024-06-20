import PortfolioTable from '@/components/Tables/PortfolioTable/PortfolioTable'
import { getPortfolios } from '@/lib/actions/portfolioActions'

export default async function Portfolio() {
  const portfolios = await getPortfolios()
  return (
    <div>
      <PortfolioTable
        portfolios={Array.isArray(portfolios) ? portfolios : []}
      />
    </div>
  )
}
