import React, { useState } from 'react'
import CodeBlock from '../components/CodeBlock'

// Sample data
const initialData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Developer" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Designer" },
]

function DesignSearchTable() {

    const [searchQuery, setSearchQuery] = useState('')
    const [data, setData] = useState(initialData)

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase()
        setSearchQuery(query)

        const filteredData = initialData.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(query)
            )
        )

        setData(filteredData)
    }

    return (
        <div>

            <h1 className='text-lg font-bold py-4'>Design 1</h1>
            <div className="container p-4 max-w-3xl bg-primary-50 mb-5">
                <div className="flex items-center  bg-secondary-500 rounded-3xl px-4 py-0 w-1/2 mb-4">
                    <svg className='mr-3 size-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full mb-0 py-2 outline-none  bg-secondary-500 text-sm"
                    />
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full ">
                        <thead className="bg-muted bg-secondary-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
                            </tr>
                        </thead>
                        <tbody className=" divide-y divide-muted">
                            {data.map((item) => (
                                <tr key={item.id} className='even:bg-secondary-800 odd:bg-primary-50 border-none'>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {data.length === 0 && (
                    <p className="text-center text-muted-foreground mt-4">No results found</p>
                )}
            </div>


            <h1 className='text-lg font-bold py-4'>Design 2</h1>
            <div className="container p-4 max-w-3xl bg-primary-50 mb-5 border rounded-xl">
                <div className='flex justify-between items-center'>
                    <div className='x-4 py-0 w-1/2 mb-4'>
                        <p className='text-xl'>Transaction Activities</p>
                    </div>
                    <div className="flex items-center justify-end bg-secondary-500 rounded-3xl px-4 py-0 w-1/2 mb-4">
                        <svg className='mr-3 size-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" 
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full mb-0 py-2 outline-none  bg-secondary-500 text-sm"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full ">
                        <thead>
                            <tr className="border rounded-lg">
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
                            </tr>
                        </thead>
                        <tbody className=" ">
                            {data.map((item) => (
                                <tr key={item.id} className="border rounded-lg">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {data.length === 0 && (
                    <p className="text-center text-muted-foreground mt-4">No results found</p>
                )}
            </div>




            <CodeBlock>{`import React, { useState } from 'react'

const initialData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Developer" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Designer" },
]

export default function MinimalistTable() {
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState(initialData)

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query)

    const filteredData = initialData.filter(item =>
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(query)
      )
    )

    setData(filteredData)
  }

  return (
    <div className="container p-4 max-w-3xl bg-primary-50">
        <div className="flex items-center  bg-secondary-500 rounded-3xl px-4 py-0 w-1/2 mb-4">
                <svg className='mr-3 size-4'xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" 
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full mb-0 py-2 outline-none  bg-secondary-500 text-sm"
            />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead className="bg-muted bg-secondary-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-muted">
            {data.map((item) => (
              <tr key={item.id} className='even:bg-secondary-800 odd:bg-primary-50 border-none'>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.length === 0 && (
        <p className="text-center text-muted-foreground mt-4">No results found</p>
      )}
    </div>
  )
}
 `}
            </CodeBlock>

        </div>

    )
}

export default DesignSearchTable