/* The canned reply settings for each reply type */

export let hoAssignee;

export const configurations = [
    { category: "Feedback", subcategory: "Product Feedback", reply: "ab" },

    { category: "Feedback", subcategory: "Coffee Chat", reply: "a" },

    { category: "Site Editor", subcategory: "User Education/Onboarding",
        title: {en: "[Strikingly] Thank you for chatting with us!", pt: "[Strikingly] Obrigado pelo seu contato!"},
        reply: { en: "<p>Happy to have you on board, Montgomery!</p><p><br data-cke-filler=\"true\"></p><p>I see that you’re still building your site. <i><strong>Are you looking for specific features for it?</strong></i> Let me know, and I’d be glad to help you out.</p><p><br data-cke-filler=\"true\"></p><p>To help you get started, you <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/215046457-Adding-and-Deleting-Sections\">can add/remove/reorder sections</a> and fill in the content you need for your site. Here are a few sections I recommend:</p><p><br data-cke-filler=\"true\"></p><ul><li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/206200951-Getting-Started-with-Simple-Store\">Simple Store section</a> - If you have plans on earning or selling stuff online, this would be a great place to start.</li><li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/214364068-Add-Simple-Blog\">Simple Blog section</a> - Share your ideas and thoughts online by writing your blogs.</li></ul><p><br data-cke-filler=\"true\"></p><p>If you want to learn more, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/218517717-Welcome-to-Strikingly-\">check out this video</a> to get familiar with the site editor. Also, check out our <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.strikingly.com/s/discover#\">Discover page</a> for design inspiration, samples, or ideas on what you can do with your site. It has a vast collection of wonderfully made sites created by our users.&nbsp;</p><p><br data-cke-filler=\"true\"></p><p>By the way, here’s the transcript of our recent conversation. We’re here 24/7 if you need any help!</p><p><br data-cke-filler=\"true\"></p><p>| Happiness Officer</p>",
            pt: "<p>Feliz em ter você a bordo, Pft-artedesign!</p><p><br data-cke-filler=\"true\"></p><p>Vi que você ainda está construindo o seu site. Está procurando por funcionalidades específicas para o seu site? Deixe-me saber, eu ficarei feliz em ajudar você. Para começar, você pode <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/pt-pt/articles/900004307883-Apresentando-Strikingly-6-Se%C3%A7%C3%B5es-de-edi%C3%A7%C3%A3o-Arrastar-e-Soltar-\">adicionar/remover/ordenar seções </a>para preencher o conteúdo que você precisa para o seu site.</p><p><br data-cke-filler=\"true\"></p><p>Algumas seções que eu posso sugerir são as seguintes:</p><p><br data-cke-filler=\"true\"></p><p><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/pt-pt/articles/900000073803-Loja-FAQs\">Seção de Loja Simples</a> - Se você tem planos de ganhar ou vender coisas online, este seria um ótimo lugar para começar.<br><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/214364068-Add-Simple-Blog\">Seção Blog Simples</a> - Compartilhe as suas idéias e pensamentos online, escrevendo seus próprios blogs.</p><p><br data-cke-filler=\"true\"></p><p>Caso queira saber mais, <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://support.strikingly.com/hc/en-us/articles/218517717-Welcome-to-Strikingly-\">assista a este vídeo</a> para ajudá-lo a se familiarizar com o Editor. Ademais, se você está procurando inspiração, amostras ou idéias sobre o que você pode fazer com seu site, confira a <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.strikingly.com/s/discover\">nossa página Descobrir</a>. Ela possui uma ampla coleção de sites maravilhosamente elaborados por nossos usuários.</p><p><br data-cke-filler=\"true\"></p><p>Por sinal, aqui está a cópia do nosso chat. Estamos aqui 24 horas por dia, 7 dias por semana se você precisar de alguma ajuda!&nbsp;</p><p><br data-cke-filler=\"true\"></p><p>| Happiness Officer</p>"} },

    { category: "Update", subcategory: "Status Update", reply: "d" },
    { category: "Closure", subcategory: "Ticket Closure", reply: "f" }

];

export function saveChanges(form, subcategory) {
    const assignee = form.querySelector("#assignee-input").value;
    const reply = form.querySelector("#reply-input").value;

    const config = configurations.find(c => c.subcategory === subcategory);

    hoAssignee = assignee;

    if (config) {
        config.reply = reply;
    }

    document.body.removeChild(form);  // Remove the form after saving
}