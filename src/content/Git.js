import React from 'react'
import CodeBlock from '../components/CodeBlock'

function Git() {
    return (
        <div>

            <h1 className='text-xl'>How to push the update</h1>
            <CodeBlock language='command-line'>{`How to push the update to github
Git add .
git commit -m "Add existing file"
git push origin main`}</CodeBlock>

<h1 className='text-xl'>How to get the updated file</h1>
            <CodeBlock language='command-line'>{`Git pull git@github.com:chrstphrvllrn/ChristopherVillarin.git`}</CodeBlock>


<h1 className='text-xl'>From 2021-08-13, GitHub is no longer accepting account passwords when authenticating Git operations. You need to add a PAT (Personal Access Token) instead, and you can follow the below method to add a PAT on your system.
</h1>
<p>https://stackoverflow.com/questions/68775869/message-support-for-password-authentication-was-removed</p>
<p>And use the generated token as a password</p>
<p>Provide a username and the generated token as a password</p>
            <CodeBlock language='command-line'>{`Username for 'https://github.com/chrstphrvllrn/': you@gmail.com
Password for 'https://github.com/chrstphrvllrn/Learning/': generated token here`}</CodeBlock>


<h1 className='text-xl'>Checking for existing SSH keys</h1>
<p>https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys</p>
<p>1. Open Terminal.</p>
<p>2. Enter ls -al ~/.ssh to see if existing SSH keys are present.</p>
            <CodeBlock language='command-line'>{`$ ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist`}</CodeBlock>
<p>Check the directory listing to see if you already have a public SSH key. By default, the filenames of supported public keys for GitHub are one of the following.

<li>id_rsa.pub</li>
<li>id_ecdsa.pub</li>
<li>id_ed25519.pub</li>
Tip: If you receive an error that ~/.ssh doesn't exist, you do not have an existing SSH key pair in the default location. You can create a new SSH key pair in the next step.
</p>
<p>Either generate a new SSH key or upload an existing key.</p>
<p>https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent</p>
        </div>
    )
}

export default Git