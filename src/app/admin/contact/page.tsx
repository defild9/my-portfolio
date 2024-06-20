import ContactTable from '@/components/Tables/ContactTable/ContactTable'
import { getContacts } from '@/lib/actions/contactAction'
import { IExtendedContact } from '@/models/modelTypes/contactModel.types'

export default async function ContactPage() {
  const contacts: IExtendedContact[] | { message: string } = await getContacts()
  return (
    <div className="mx-auto px-4">
      <ContactTable contacts={contacts} />
    </div>
  )
}
