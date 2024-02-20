'use client';

import { useSession } from "next-auth/react";

export default function ProfilePage()  {
    const session =useSession();
    console.log(session)
return(
    <section className="mt-8">
    <h1>
        profile
    </h1>
    </section>
)

}
