import React from 'react'
import CodeBlock from '../components/CodeBlock'

function DesignTable() {

    const licenses = [
        { title: "Basic License", license: "Single User", price: "$49", action: "Buy Now" },
        { title: "Pro License", license: "Up to 5 Users", price: "$99", action: "Buy Now" },
        { title: "Enterprise License", license: "Unlimited Users", price: "$199", action: "Contact Sales" },
      ]

  return (

    <div>

<div className="container mx-auto py-10 ">
      <div className="rounded-md border bg-white">
        <table className="w-full caption-bottom text-sm">
     
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[200px]">
                Title
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                License
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                Price
              </th>
              <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {licenses.map((license) => (
              <tr
                key={license.title}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                  {license.title}
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                  {license.license}
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                  {license.price}
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium
                    ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                    disabled:opacity-50 border border-input bg-background hover:bg-accent 
                    hover:text-accent-foreground h-9 px-3"
                  >
                    {license.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


      <CodeBlock >
        {`import React from "react"

const licenses = [
  { title: "Basic License", license: "Single User", price: "$49", action: "Buy Now" },
  { title: "Pro License", license: "Up to 5 Users", price: "$99", action: "Buy Now" },
  { title: "Enterprise License", license: "Unlimited Users", price: "$199", action: "Contact Sales" },
]

export default function LicenseTable() {
  return (
    <div className="container mx-auto py-10">
      <div className="rounded-md border">
        <table className="w-full caption-bottom text-sm">
       
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground
              [&:has([role=checkbox])]:pr-0 w-[200px]">
                Title
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                License
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                Price
              </th>
              <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {licenses.map((license) => (
              <tr
                key={license.title}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                  {license.title}
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                  {license.license}
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                  {license.price}
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                  <button
                 className="inline-flex items-center justify-center rounded-md text-sm font-medium
                    ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                    disabled:opacity-50 border border-input bg-background hover:bg-accent 
                    hover:text-accent-foreground h-9 px-3" >
                    {license.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


      `}
      </CodeBlock>



    </div>
  )
}

export default DesignTable