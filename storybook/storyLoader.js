
// template for doT (https://github.com/olado/doT)

function loadStories() {
  
  require('../src/lib/Components/Artist/__stories__/ArtistArticles.story.tsx');
  require('../src/lib/Components/Artist/__stories__/ArtistHeader.story.tsx');
  require('../src/lib/Components/Buttons/__stories__/Buttons.story.tsx');
  require('../src/lib/Components/Consignments/__stories__/BottomAligned.story.tsx');
  require('../src/lib/Components/Consignments/__stories__/Consignments.story.tsx');
  require('../src/lib/Components/Consignments/__stories__/ImageSelection.story.tsx');
  require('../src/lib/Components/Consignments/__stories__/Search.story.tsx');
  require('../src/lib/Components/Consignments/__stories__/Style.story.tsx');
  require('../src/lib/Components/Consignments/__stories__/Todo.story.tsx');
  require('../src/lib/Components/Inbox/Conversations/Preview/__stories__/InvoicePreview.story.tsx');
  require('../src/lib/Components/Inbox/Conversations/__stories__/ArtworkPreview.story.tsx');
  require('../src/lib/Components/Inbox/Conversations/__stories__/Avatar.story.tsx');
  require('../src/lib/Components/Inbox/Conversations/__stories__/Composer.story.tsx');
  require('../src/lib/Components/Inbox/Conversations/__stories__/ConversationSnippet.story.tsx');
  require('../src/lib/Components/Inbox/Conversations/__stories__/Inbox.story.tsx');
  require('../src/lib/Components/Inbox/Conversations/__stories__/ZeroStateInbox.story.tsx');
  require('../src/lib/Components/Text/__stories__/Typography.story.tsx');
  require('../src/lib/Components/__stories__/DottedLine.story.tsx');
  require('../src/lib/Containers/__stories__/Artist.story.tsx');
  require('../src/lib/Containers/__stories__/Gene.story.tsx');
  require('../src/lib/Containers/__stories__/Inquiry.story.tsx');
  require('../src/lib/Containers/__stories__/Sale.story.tsx');
  require('../src/lib/Scenes/Favorites/__stories__/Favorites.story.tsx');
  require('../src/lib/Scenes/Home/__stories__/Home.story.tsx');
  require('../src/lib/Scenes/Settings/__stories__/Settings.story.tsx');
  
}

module.exports = {
  loadStories,
};
