<template>
    <div id="positionen" class="ld-section !mb-0">
        <div class="bg-black text-white">
            <div class="ld-container py-16">
                <div class="flex justify-center w-full">
                    <h1 class="boxed text-4xl lg:text-5xl xl:text-6xl" style="--highlight-color: white; --text-color: black;">Meine Politik.</h1>
                </div>
                <p class="mt-8">In Zeiten eines massiven rechts(extremen) Backlashes ist es umso wichtiger, dass linke Städte eine Gegenvision aufzeigen. Sie sind ein Leuchtturm in stürmischen Zeiten. Das bedeutet auch, dass wir eine linke Wirtschaftspolitik nicht etwa gegen den Schutz von trans Personen oder anderen Minderheiten ausspielen dürfen. Darauf basieren meine politischen Überzeugungen sowie meine politischen Forderungen.</p>
            </div>
        </div>
        <div class="ld-positionen-slider w-full block lg:overflow-x-scroll lg:flex">
            <div class="ld-position bg-[#F73B3B] text-[#000000] text-lg md:text-xl lg:text-2xl">
                <h1 class="font-inter leading-[1] text-2xl mb-4">Ich will ein Züri, in dem die Polizei zur Rechenschaft gezogen wird!</h1>
                <p>Die Chats der Polizei in Lausanne haben gezeigt, wie Rassismus, Queerfeindlichkeit, Antisemitismus und Sexismus in der Polizei täglich geschehen und akzeptiert werden. Zu denken, die Stadtpolizei Zürich wäre einfach besser, ist naiv. So wurde die Stadtpolizei in den letzten Jahren 2 Mal vom EGMR verurteilt. Beides hat nicht zu einer Entschuldigung und Strukturreform bei der StaPo geführt; die Einsicht ist offenbar nicht vorhanden.</p>
                <p>Daher müssen gerade interne Ombudsstellen ausgebaut und mit mehr Kompetenzen ausgestattet werden, damit sich endlich eine Nulltoleranz-Politik durchsetzt. Es kann zudem nicht sein, dass die Polizei Gewalt gegen BIPoC-Personen und linke Demonstrant*innen anwendet und damit ungestraft davonkommt. Daher braucht es dringend eine unabhängige externe Ombudsstelle sowie ein Verbot von Grummischrot, damit nicht noch mehr Personen ihr Augenlicht verlieren.</p>
            </div>
            <div class="ld-position bg-[#6800C4] text-[#FFFF00] text-lg md:text-xl lg:text-2xl">
                <h1 class="font-inter leading-[1] text-2xl mb-4">Ich will ein Züri, das queere und vor allem trans Menschen schützt!</h1>
                <p>Queere Personen, insbesondere trans Personen, erleben immer noch viel zu oft Gewalt, auch in Zürich. Es ist daher notwendig, die Beratungsangebote für Betroffene und Angehörige zu stärken und Schutzhäuser sowie Kriseninterventionszentren zugänglicher zu machen. Gerade für gendernonkonforme Personen müssen hier Lösungen gefunden werden. Ausserdem muss der Zugang zur Gesundheitsversorgung verbessert werden. Neben einem Ausbau der Unterstützung für trans Personen in diesem Bereich stellt der Kampf mit den Krankenkassen, die verpflichtet sind, Gesundheitsleistungen für trans Personen zu übernehmen, ein grosses Hindernis dar. Unterstützungsleistungen wie kostenlose Rechtsberatung und Vertretung von Stadtzürcher*innen gegenüber den Krankenkassen müssen daher geprüft werden.</p>
            </div>
            <div class="ld-position bg-[#F376A5] text-[#36006B] text-lg md:text-xl lg:text-2xl">
                <h1 class="font-inter leading-[1] text-2xl mb-4">Ich will eine Wirtschaft, die die Menschen ins Zentrum stellt!</h1>
                <p>Die Probleme sind erdrückend: steigende Mieten, steigende Krankenkassenprämien und stagnierende Löhne. Unser Wirtschaftssystem stellt den Profit der wenigen über das Leben der vielen. Als Stadt Zürich können wir zwar nicht das gesamte Wirtschaftssystem umbauen, aber wir können die schlimmsten Auswüchse verhindern. Auch wenn die FDP Projekte wie den städtischen Mindestlohn oder die Basishilfe gerichtlich verhindern will, dürfen wir in diesem Bereich nicht nachlassen und müssen notfalls mit neuen Ideen dafür sorgen, dass man sich das Leben in Zürich leisten kann, auch wenn man nicht zur "Wirtschaftselite" gehört.</p>
            </div>
            <div class="ld-position bg-[#98FF9E] text-[#8000FF] text-lg md:text-xl lg:text-2xl">
                <h1 class="font-inter leading-[1] text-2xl mb-4">Ich will ein autofreies Züri!</h1>
                <p>Der Strassenraum, insbesondere die Quartierstrassen, muss wieder der Bevölkerung zugänglich gemacht werden. Es sollte Raum für Velofahrerr*innen, Fussgänger*innen und Freiraumgeniesser*innen geschaffen werden. Konzepte wie Quartierblöcke und autofreie Zonen sind notwendig, da Autos den grössten Teil des öffentlichen Raums versperren. Gewerbe, Blaulichtorganisationen sowie Fahrten für mobilitätseingeschränkte Menschen müssen selbstverständlich weiterhin möglich sein.</p>
            </div>
        </div>
        <div class="ld-positionen-slider--scrollicon my-4 justify-center hidden lg:flex">
            <Icon name="ic:baseline-double-arrow" class="animate-pulse" />
        </div>
    </div>
</template>

<style scoped>
.ld-positionen-slider {
    align-items: stretch;
}

.ld-position {
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: normal;
    flex-shrink: 0;
    @apply p-6 lg:p-12 w-full lg:w-[45vw];
}

</style>